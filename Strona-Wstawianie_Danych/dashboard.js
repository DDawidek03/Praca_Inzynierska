// Dashboard functionality

document.addEventListener("DOMContentLoaded", function () {
  // Initialize sidebar navigation
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  const dashboardSections = document.querySelectorAll(".dashboard-section");

  // Show dashboard section based on hash or default to dashboard
  function showSectionFromHash() {
    const hash = window.location.hash.substring(1) || "dashboard";
    showSection(hash);
  }

  // Show a specific dashboard section
  window.showSection = function (sectionId) {
    // Hide all sections
    dashboardSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Show the selected section
    const targetSection =
      document.getElementById(sectionId) ||
      document.getElementById("dashboard");
    if (targetSection) {
      targetSection.classList.add("active");
      window.location.hash = sectionId;

      // Highlight active sidebar link
      sidebarLinks.forEach((link) => {
        const linkSection = link.getAttribute("href").substring(1);
        if (linkSection === sectionId) {
          link.classList.add("active-link");
          link.classList.add("bg-blue-800");
          link.classList.add("text-white");
        } else {
          link.classList.remove("active-link");
          link.classList.remove("bg-blue-800");
          link.classList.remove("text-white");
        }
      });
    }
  };

  // Handle sidebar navigation clicks
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      showSection(sectionId);
    });
  });

  // Handle table tabs
  const tableTabs = document.querySelectorAll(".table-tab-btn");

  tableTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabGroup = this.parentElement;
      const tableId = this.getAttribute("data-table");

      // Deactivate all tabs in this group
      tabGroup.querySelectorAll(".table-tab-btn").forEach((t) => {
        t.classList.remove("active");
      });

      // Activate this tab
      this.classList.add("active");

      // Hide all forms
      const formContainer = tabGroup.parentElement;
      formContainer.querySelectorAll(".table-form").forEach((form) => {
        form.classList.remove("active");
      });

      // Show the selected form
      const targetForm = document.getElementById(`${tableId}-form`);
      if (targetForm) {
        targetForm.classList.add("active");
      }
    });
  });

  // Help modal functionality
  const helpBtn = document.getElementById("helpBtn");
  const helpModal = document.getElementById("helpModal");
  const closeHelpBtn = document.getElementById("closeHelpBtn");

  if (helpBtn && helpModal && closeHelpBtn) {
    helpBtn.addEventListener("click", function () {
      helpModal.classList.remove("hidden");
    });

    closeHelpBtn.addEventListener("click", function () {
      helpModal.classList.add("hidden");
    });

    // Close modal when clicking outside
    helpModal.addEventListener("click", function (e) {
      if (e.target === helpModal) {
        helpModal.classList.add("hidden");
      }
    });
  }

  // Initialize based on URL hash
  showSectionFromHash();

  // Handle form submissions (prevent default and show success message)
  const forms = document.querySelectorAll("form");

  // Enhanced relational data loading for select fields
  function loadRelatedOptions(sourceSelect, targetSelect, relationMap) {
    if (!sourceSelect || !targetSelect) return;

    sourceSelect.addEventListener("change", function () {
      const selectedValue = this.value;

      // Clear existing options except the first one
      while (targetSelect.options.length > 1) {
        targetSelect.remove(1);
      }

      // If no value selected or no relations defined, disable target
      if (!selectedValue || !relationMap[selectedValue]) {
        targetSelect.disabled = true;
        return;
      }

      // Add new options based on the selected value
      relationMap[selectedValue].forEach((item) => {
        const option = document.createElement("option");
        option.value = item.value;
        option.textContent = item.text;
        targetSelect.appendChild(option);
      });

      // Enable the target select
      targetSelect.disabled = false;
    });

    // Initialize as disabled if no selection
    if (sourceSelect.value === "") {
      targetSelect.disabled = true;
    }
  }

  // Example of enhanced country-region relation (aligned with SQL database)
  const countrySelects = document.querySelectorAll('select[name="country"]');
  const regionSelects = document.querySelectorAll('select[name="region"]');

  if (countrySelects.length && regionSelects.length) {
    // Example relation map based on database schema in SalesDB.sql
    const countryRegionMap = {
      1: [
        // Poland
        { value: "101", text: "Mazowieckie" },
        { value: "102", text: "Małopolskie" },
        { value: "103", text: "Śląskie" },
        { value: "104", text: "Wielkopolskie" },
        { value: "105", text: "Podlaskie" },
      ],
      2: [
        // Germany
        { value: "201", text: "Berlin" },
        { value: "202", text: "Bavaria" },
        { value: "203", text: "Saxony" },
        { value: "204", text: "Hessen" },
      ],
      3: [
        // France
        { value: "301", text: "Île-de-France" },
        { value: "302", text: "Provence-Alpes-Côte d'Azur" },
        { value: "303", text: "Normandy" },
      ],
      4: [
        // UK
        { value: "401", text: "England" },
        { value: "402", text: "Scotland" },
        { value: "403", text: "Wales" },
        { value: "404", text: "Northern Ireland" },
      ],
      5: [
        // USA
        { value: "501", text: "California" },
        { value: "502", text: "New York" },
        { value: "503", text: "Texas" },
        { value: "504", text: "Florida" },
      ],
    };

    for (
      let i = 0;
      i < Math.min(countrySelects.length, regionSelects.length);
      i++
    ) {
      loadRelatedOptions(countrySelects[i], regionSelects[i], countryRegionMap);
    }
  }

  // Category-Product relation for product selection
  const categorySelects = document.querySelectorAll('select[name="category"]');
  const productSelects = document.querySelectorAll('select[name="product"]');

  if (categorySelects.length && productSelects.length) {
    // Example relation map based on database schema
    const categoryProductMap = {
      1: [
        // Electronics
        { value: "101", text: "Laptop Dell XPS 13" },
        { value: "102", text: "iPhone 14 Pro" },
        { value: "103", text: "Samsung Galaxy S23" },
        { value: "104", text: "Sony WH-1000XM5 Headphones" },
      ],
      2: [
        // Clothing
        { value: "201", text: "Nike Air Max" },
        { value: "202", text: "Levi's 501 Jeans" },
        { value: "203", text: "Adidas Ultraboost" },
      ],
      3: [
        // Furniture
        { value: "301", text: "IKEA BILLY Bookcase" },
        { value: "302", text: "Leather Sofa" },
        { value: "303", text: "Office Desk" },
      ],
      4: [
        // Sports
        { value: "401", text: "Tennis Racket" },
        { value: "402", text: "Basketball" },
        { value: "403", text: "Yoga Mat" },
      ],
    };

    for (
      let i = 0;
      i < Math.min(categorySelects.length, productSelects.length);
      i++
    ) {
      loadRelatedOptions(
        categorySelects[i],
        productSelects[i],
        categoryProductMap
      );
    }
  }

  // Style all select elements with proper classes
  const dataTypeSelects = document.querySelectorAll(
    'select[data-type="data-type"]'
  );
  dataTypeSelects.forEach((select) => {
    select.classList.add("data-type-select");
  });

  const entitySelects = document.querySelectorAll('select[data-type="entity"]');
  entitySelects.forEach((select) => {
    select.classList.add("entity-select");
  });

  // Add classes to all select elements for better styling
  const allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    // Add the entity-select class to country and region selects if they don't have it yet
    if (
      (select.name === "country" || select.name === "region") &&
      !select.classList.contains("entity-select")
    ) {
      select.classList.add("entity-select");
    }

    // Add data-type attributes for selects that don't have them
    if (select.name === "status" || select.name === "paymentMethod") {
      select.setAttribute("data-type", "data-type");
      select.classList.add("data-type-select");
    }
  });

  // Initialize JSON file uploads with code formatting
  const jsonTextareas = document.querySelectorAll(
    'textarea[placeholder*="JSON"]'
  );
  const fileInputs = document.querySelectorAll('input[type="file"]');

  fileInputs.forEach((input) => {
    input.addEventListener("change", function (e) {
      // Find closest textarea for JSON if exists
      const form = this.closest("form");
      if (!form) return;

      const jsonArea = form.querySelector('textarea[placeholder*="JSON"]');

      if (jsonArea && this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          try {
            // Try to parse and format JSON for JSON files
            if (input.accept && input.accept.includes("json")) {
              const json = JSON.parse(e.target.result);
              jsonArea.value = JSON.stringify(json, null, 2);
            } else {
              // If not a JSON file or parsing fails, just show as is
              jsonArea.value = e.target.result;
            }
          } catch (error) {
            // Show error message
            jsonArea.value =
              "Error parsing JSON: " + error.message + "\n\n" + e.target.result;
          }
        };
        reader.readAsText(this.files[0]);
      }
    });
  });

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the data to your backend
      // For now, just show a success message

      // Create success message
      const successMsg = document.createElement("div");
      successMsg.className =
        "fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50 flex items-center";
      successMsg.innerHTML = `
                <i class="fas fa-check-circle mr-3"></i>
                <div>
                    <p class="font-medium">Sukces!</p>
                    <p class="text-sm">Dane zostały pomyślnie zapisane.</p>
                </div>
            `;

      // Add to document
      document.body.appendChild(successMsg);

      // Reset form
      form.reset();

      // Reset dependent selects
      const dependentSelects = form.querySelectorAll("select[disabled]");
      dependentSelects.forEach((select) => {
        // Clear all options except the first placeholder
        while (select.options.length > 1) {
          select.remove(1);
        }
      });

      // Remove message after 3 seconds
      setTimeout(() => {
        successMsg.style.opacity = "0";
        successMsg.style.transition = "opacity 0.5s";

        setTimeout(() => {
          document.body.removeChild(successMsg);
        }, 500);
      }, 3000);
    });
  });

  // Initialize API connection if available
  if (window.GlobalVistaAPI) {
    console.log("API connection available");

    // Add event listeners for backend integration
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        // Get the form type from section ID or form ID
        const section = this.closest(".dashboard-section");
        if (!section) return;

        const sectionId = section.id;

        // Data processing would happen here in real implementation
        console.log(`Form submitted in section: ${sectionId}`);
      });
    });
  }
});
