// ==========================================================================
// CONFIGURACIÓN Y VARIABLES GLOBALES
// ==========================================================================
var currentPage = 1;
var itemsPerPage = 15;
var filteredProducts = [];
var currentChart = null;

// Helper para calcular la variación porcentual entre dos precios
function calculateChange(currentPrice, previousPrice) {
  if (previousPrice == 0) {
    return 0;
  }
  return ((currentPrice - previousPrice) / previousPrice) * 100;
}

// ==========================================================================
// CÁLCULO DE ESTADÍSTICAS DEL DASHBOARD
// ==========================================================================
function calculateStats() {
  var totalInflationSum = 0;
  var categoryInflationSum = {};
  var categoryCount = {};
  
  for (var i = 0; i < mercadonaProducts.length; i++) {
    var product = mercadonaProducts[i];
    var p2021 = product.prices[2021];
    var p2026 = product.prices[2026];
    var productTotalInflation = calculateChange(p2026, p2021);
    
    totalInflationSum = totalInflationSum + productTotalInflation;
    
    var cat = product.category;
    if (categoryInflationSum[cat] == null) {
      categoryInflationSum[cat] = 0;
      categoryCount[cat] = 0;
    }
    categoryInflationSum[cat] = categoryInflationSum[cat] + productTotalInflation;
    categoryCount[cat] = categoryCount[cat] + 1;
  }
  
  // 1. Inflación Media Acumulada
  var avgInflation = totalInflationSum / mercadonaProducts.length;
  var avgInflationEl = document.getElementById("avg-inflation-value");
  if (avgInflationEl != null) {
    avgInflationEl.innerText = "+" + avgInflation.toFixed(1) + "%";
  }
  
  // 2. Categoría con Mayor Inflación
  var maxCat = "";
  var maxCatAvg = -999;
  for (var catName in categoryInflationSum) {
    var avg = categoryInflationSum[catName] / categoryCount[catName];
    if (avg > maxCatAvg) {
      maxCatAvg = avg;
      maxCat = catName;
    }
  }
  
  var maxCatEl = document.getElementById("highest-category-value");
  if (maxCatEl != null) {
    // Si el nombre es muy largo, acortarlo un poco
    var displayName = maxCat;
    if (maxCat == "Despensa y Alimentación Seca") {
      displayName = "Despensa/Secos";
    }
    maxCatEl.innerText = displayName + " (" + maxCatAvg.toFixed(1) + "%)";
  }
}

// ==========================================================================
// FILTRADO, ORDENACIÓN Y PAGINACIÓN
// ==========================================================================
function applyFiltersAndSort() {
  var searchQuery = document.getElementById("search-input").value.toLowerCase();
  var categoryFilter = document.getElementById("category-filter").value;
  var sortVal = document.getElementById("sort-select").value;
  
  filteredProducts = [];
  
  // Filtrado
  for (var i = 0; i < mercadonaProducts.length; i++) {
    var product = mercadonaProducts[i];
    var matchesSearch = product.name.toLowerCase().indexOf(searchQuery) != -1;
    var matchesCategory = (categoryFilter == "all") || (product.category == categoryFilter);
    
    if (matchesSearch && matchesCategory) {
      filteredProducts.push(product);
    }
  }
  
  // Ordenación
  filteredProducts.sort(function(a, b) {
    if (sortVal == "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortVal == "name-desc") {
      return b.name.localeCompare(a.name);
    }
    if (sortVal == "price-2021-asc") {
      return a.prices[2021] - b.prices[2021];
    }
    if (sortVal == "price-2026-desc") {
      return b.prices[2026] - a.prices[2026];
    }
    if (sortVal == "inflation-desc") {
      var changeA = calculateChange(a.prices[2026], a.prices[2021]);
      var changeB = calculateChange(b.prices[2026], b.prices[2021]);
      return changeB - changeA;
    }
    if (sortVal == "inflation-asc") {
      var changeA = calculateChange(a.prices[2026], a.prices[2021]);
      var changeB = calculateChange(b.prices[2026], b.prices[2021]);
      return changeA - changeB;
    }
    return 0;
  });
  
  currentPage = 1;
  renderData();
}

function renderData() {
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  if (endIndex > filteredProducts.length) {
    endIndex = filteredProducts.length;
  }
  
  var pageItems = filteredProducts.slice(startIndex, endIndex);
  
  // Actualizar contador de resultados
  var resultsText = document.getElementById("results-count-text");
  if (resultsText != null) {
    if (filteredProducts.length == 0) {
      resultsText.innerText = "No se encontraron productos";
    } else {
      resultsText.innerText = "Mostrando " + (startIndex + 1) + " - " + endIndex + " de " + filteredProducts.length + " productos";
    }
  }
  
  renderCards(pageItems);
  renderPagination();
}



function renderCards(items) {
  var grid = document.getElementById("products-grid-container");
  if (grid == null) {
    return;
  }
  grid.innerHTML = "";
  
  for (var i = 0; i < items.length; i++) {
    var product = items[i];
    var card = document.createElement("div");
    card.className = "product-card";
    
    (function(p) {
      card.addEventListener("click", function() {
        openModal(p);
      });
    })(product);
    
    var totalPct = calculateChange(product.prices[2026], product.prices[2021]);
    var totalClass = "neutral";
    if (totalPct > 0) {
      totalClass = "up";
    } else if (totalPct < 0) {
      totalClass = "down";
    }
    
    var html = "";
    html += '<div class="card-header">';
    html += '  <span class="card-category">' + product.category + '</span>';
    html += '  <h3 class="card-title">' + product.name + '</h3>';
    html += '</div>';
    
    html += '<div class="card-prices-grid">';
    
    var years = [2021, 2022, 2023, 2024, 2025, 2026];
    for (var y = 0; y < years.length; y++) {
      var year = years[y];
      var price = product.prices[year];
      var pctText = "";
      var pctClass = "neutral";
      
      if (year > 2021) {
        var prevPrice = product.prices[year - 1];
        var pct = calculateChange(price, prevPrice);
        if (pct > 0) {
          pctClass = "up";
          pctText = "+" + pct.toFixed(0) + "%";
        } else if (pct < 0) {
          pctClass = "down";
          pctText = pct.toFixed(0) + "%";
        } else {
          pctText = "0%";
        }
      } else {
        pctText = "base";
      }
      
      html += '<div class="card-price-item">';
      html += '  <span class="card-price-label">' + year + '</span>';
      html += '  <span class="card-price-val">' + price.toFixed(2) + '€</span>';
      html += '  <span class="card-percentage ' + pctClass + '">' + pctText + '</span>';
      html += '</div>';
    }
    
    html += '</div>';
    
    html += '<div class="card-footer">';
    html += '  <span class="card-overall-label">Subida Acumulada</span>';
    html += '  <span class="card-overall-val ' + totalClass + '">' + (totalPct > 0 ? '+' : '') + totalPct.toFixed(1) + '%</span>';
    html += '</div>';
    
    card.innerHTML = html;
    grid.appendChild(card);
  }
}

function renderPagination() {
  var container = document.getElementById("pagination-controls");
  if (container == null) {
    return;
  }
  container.innerHTML = "";
  
  var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  if (totalPages <= 1) {
    return;
  }
  
  // Botón Anterior
  var prevBtn = document.createElement("button");
  prevBtn.className = "pg-btn";
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevBtn.disabled = currentPage == 1;
  prevBtn.addEventListener("click", function() {
    if (currentPage > 1) {
      currentPage = currentPage - 1;
      renderData();
    }
  });
  container.appendChild(prevBtn);
  
  var startPage = Math.max(1, currentPage - 2);
  var endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }
  
  if (startPage > 1) {
    var firstBtn = document.createElement("button");
    firstBtn.className = "pg-btn";
    firstBtn.innerText = "1";
    firstBtn.addEventListener("click", function() {
      currentPage = 1;
      renderData();
    });
    container.appendChild(firstBtn);
    
    if (startPage > 2) {
      var dots = document.createElement("span");
      dots.className = "pg-btn";
      dots.style.border = "none";
      dots.style.cursor = "default";
      dots.innerText = "...";
      container.appendChild(dots);
    }
  }
  
  for (var i = startPage; i <= endPage; i++) {
    var btn = document.createElement("button");
    btn.className = "pg-btn" + (currentPage == i ? " active" : "");
    btn.innerText = i;
    (function(pageNumber) {
      btn.addEventListener("click", function() {
        currentPage = pageNumber;
        renderData();
      });
    })(i);
    container.appendChild(btn);
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      var dots2 = document.createElement("span");
      dots2.className = "pg-btn";
      dots2.style.border = "none";
      dots2.style.cursor = "default";
      dots2.innerText = "...";
      container.appendChild(dots2);
    }
    
    var lastBtn = document.createElement("button");
    lastBtn.className = "pg-btn";
    lastBtn.innerText = totalPages;
    (function(pageNumber) {
      lastBtn.addEventListener("click", function() {
        currentPage = pageNumber;
        renderData();
      });
    })(totalPages);
    container.appendChild(lastBtn);
  }
  
  // Botón Siguiente
  var nextBtn = document.createElement("button");
  nextBtn.className = "pg-btn";
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextBtn.disabled = currentPage == totalPages;
  nextBtn.addEventListener("click", function() {
    if (currentPage < totalPages) {
      currentPage = currentPage + 1;
      renderData();
    }
  });
  container.appendChild(nextBtn);
}

// ==========================================================================
// VISTA DETALLE: MODAL Y GRÁFICO DE TENDENCIA (CHART.JS)
// ==========================================================================
function openModal(product) {
  var modal = document.getElementById("product-modal");
  if (modal == null) {
    return;
  }
  
  document.getElementById("modal-product-category").innerText = product.category;
  document.getElementById("modal-product-name").innerText = product.name;
  
  var price2021 = product.prices[2021];
  var price2026 = product.prices[2026];
  var totalPct = calculateChange(price2026, price2021);
  
  document.getElementById("modal-price-2021").innerText = price2021.toFixed(2) + " €";
  document.getElementById("modal-price-2026").innerText = price2026.toFixed(2) + " €";
  
  var totalChangeEl = document.getElementById("modal-total-change");
  totalChangeEl.innerText = (totalPct > 0 ? "+" : "") + totalPct.toFixed(1) + "%";
  
  var totalBox = totalChangeEl.parentElement;
  if (totalPct > 0) {
    totalChangeEl.className = "stat-value up";
    totalBox.className = "modal-stat-box highlight";
  } else if (totalPct < 0) {
    totalChangeEl.className = "stat-value down";
    totalBox.className = "modal-stat-box highlight down";
  } else {
    totalChangeEl.className = "stat-value";
    totalBox.className = "modal-stat-box";
  }
  
  // Desglose de precios año a año en lista
  var list = document.getElementById("modal-yearly-list");
  list.innerHTML = "";
  
  var years = [2021, 2022, 2023, 2024, 2025, 2026];
  for (var i = 0; i < years.length; i++) {
    var year = years[i];
    var price = product.prices[year];
    var li = document.createElement("li");
    
    var pctText = "Base (2021)";
    var pctClass = "neutral";
    
    if (year > 2021) {
      var prevPrice = product.prices[year - 1];
      var pct = calculateChange(price, prevPrice);
      if (pct > 0) {
        pctClass = "up";
        pctText = "+" + pct.toFixed(1) + "%";
      } else if (pct < 0) {
        pctClass = "down";
        pctText = pct.toFixed(1) + "%";
      } else {
        pctText = "0.0%";
      }
    }
    
    li.innerHTML = '<span class="modal-year">' + year + '</span>' + 
                   '<span class="modal-price-val">' + price.toFixed(2) + ' €</span>' + 
                   '<span class="modal-change-badge ' + pctClass + '">' + pctText + '</span>';
    list.appendChild(li);
  }
  
  // Mostrar modal con transición suave
  modal.style.display = "flex";
  // Truco de reflow para forzar animación CSS
  modal.offsetHeight;
  modal.classList.add("open");
  
  // Generar gráfico de Chart.js
  renderProductChart(product);
}

function closeModal() {
  var modal = document.getElementById("product-modal");
  if (modal == null) {
    return;
  }
  modal.classList.remove("open");
  setTimeout(function() {
    modal.style.display = "none";
  }, 300);
}

function renderProductChart(product) {
  var canvas = document.getElementById("productTrendChart");
  if (canvas == null) {
    return;
  }
  var ctx = canvas.getContext("2d");
  
  // Destruir gráfico anterior si existe
  if (currentChart != null) {
    currentChart.destroy();
  }
  
  var labelYears = ["2021", "2022", "2023", "2024", "2025", "2026"];
  var pricesData = [
    product.prices[2021],
    product.prices[2022],
    product.prices[2023],
    product.prices[2024],
    product.prices[2025],
    product.prices[2026]
  ];
  
  currentChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labelYears,
      datasets: [{
        label: "Precio (€)",
        data: pricesData,
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.15)",
        borderWidth: 3,
        pointBackgroundColor: "#0284c7",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "#151e2e",
          titleColor: "#fff",
          bodyColor: "#94a3b8",
          borderColor: "#243249",
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: function(context) {
              return "Precio: " + context.raw.toFixed(2) + " €";
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: "rgba(36, 50, 73, 0.25)",
            borderColor: "rgba(36, 50, 73, 0.4)"
          },
          ticks: {
            color: "#94a3b8",
            font: {
              family: "Inter",
              size: 11
            }
          }
        },
        y: {
          grid: {
            color: "rgba(36, 50, 73, 0.25)",
            borderColor: "rgba(36, 50, 73, 0.4)"
          },
          ticks: {
            color: "#94a3b8",
            font: {
              family: "Inter",
              size: 11
            },
            callback: function(value) {
              return value.toFixed(2) + " €";
            }
          }
        }
      }
    }
  });
}

// ==========================================================================
// INICIALIZACIÓN DE COMPONENTES DE INTERFAZ
// ==========================================================================
function initCategoryFilter() {
  var filterSelect = document.getElementById("category-filter");
  if (filterSelect == null) {
    return;
  }
  
  var categories = [];
  for (var i = 0; i < mercadonaProducts.length; i++) {
    var cat = mercadonaProducts[i].category;
    if (categories.indexOf(cat) == -1) {
      categories.push(cat);
    }
  }
  
  categories.sort();
  
  for (var j = 0; j < categories.length; j++) {
    var opt = document.createElement("option");
    opt.value = categories[j];
    opt.innerText = categories[j];
    filterSelect.appendChild(opt);
  }
}



document.addEventListener("DOMContentLoaded", function() {
  initCategoryFilter();
  calculateStats();
  
  // Escuchar eventos de interacción de búsqueda y filtros
  var searchInput = document.getElementById("search-input");
  if (searchInput != null) {
    searchInput.addEventListener("input", function() {
      applyFiltersAndSort();
    });
  }
  
  var categoryFilter = document.getElementById("category-filter");
  if (categoryFilter != null) {
    categoryFilter.addEventListener("change", function() {
      applyFiltersAndSort();
    });
  }
  
  var sortSelect = document.getElementById("sort-select");
  if (sortSelect != null) {
    sortSelect.addEventListener("change", function() {
      applyFiltersAndSort();
    });
  }
  
  // Cerrar modal
  var modalClose = document.getElementById("modal-close");
  if (modalClose != null) {
    modalClose.addEventListener("click", function() {
      closeModal();
    });
  }
  
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("product-modal");
    if (event.target == modal) {
      closeModal();
    }
  });
  
  // Cargar lista inicial
  applyFiltersAndSort();
});
