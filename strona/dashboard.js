// Dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const dashboardSections = document.querySelectorAll('.dashboard-section');
    
    // Show dashboard section based on hash or default to dashboard
    function showSectionFromHash() {
        const hash = window.location.hash.substring(1) || 'dashboard';
        showSection(hash);
    }
    
    // Show a specific dashboard section
    window.showSection = function(sectionId) {
        // Hide all sections
        dashboardSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        const targetSection = document.getElementById(sectionId) || document.getElementById('dashboard');
        if (targetSection) {
            targetSection.classList.add('active');
            window.location.hash = sectionId;
        }
    };
    
    // Handle sidebar navigation clicks
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    
    // Handle table tabs
    const tableTabs = document.querySelectorAll('.table-tab-btn');
    
    tableTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabGroup = this.parentElement;
            const tableId = this.getAttribute('data-table');
            
            // Deactivate all tabs in this group
            tabGroup.querySelectorAll('.table-tab-btn').forEach(t => {
                t.classList.remove('active');
            });
            
            // Activate this tab
            this.classList.add('active');
            
            // Hide all forms
            const formContainer = tabGroup.parentElement;
            formContainer.querySelectorAll('.table-form').forEach(form => {
                form.classList.remove('active');
            });
            
            // Show the selected form
            const targetForm = document.getElementById(`${tableId}-form`);
            if (targetForm) {
                targetForm.classList.add('active');
            }
        });
    });
    
    // Help modal functionality
    const helpBtn = document.getElementById('helpBtn');
    const helpModal = document.getElementById('helpModal');
    const closeHelpBtn = document.getElementById('closeHelpBtn');
    
    if (helpBtn && helpModal && closeHelpBtn) {
        helpBtn.addEventListener('click', function() {
            helpModal.classList.remove('hidden');
        });
        
        closeHelpBtn.addEventListener('click', function() {
            helpModal.classList.add('hidden');
        });
        
        // Close modal when clicking outside
        helpModal.addEventListener('click', function(e) {
            if (e.target === helpModal) {
                helpModal.classList.add('hidden');
            }
        });
    }
    
    // Initialize based on URL hash
    showSectionFromHash();
    
    // Handle form submissions (prevent default and show success message)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the data to your backend
            // For now, just show a success message
            
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.className = 'fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50 flex items-center';
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
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.style.opacity = '0';
                successMsg.style.transition = 'opacity 0.5s';
                
                setTimeout(() => {
                    document.body.removeChild(successMsg);
                }, 500);
            }, 3000);
        });
    });
});
