/**
 * API Mock dla GlobalVista
 *
 * Ten plik zawiera symulowane funkcje API do testowania interfejsu
 * bez konieczności połączenia z rzeczywistą bazą danych.
 */

const GlobalVistaAPI = {
  /**
   * SQL Database Operations
   */
  sql: {
    // Customers
    getCustomers: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              firstName: "Jan",
              lastName: "Kowalski",
              email: "jan.kowalski@example.com",
            },
            {
              id: 2,
              firstName: "Anna",
              lastName: "Nowak",
              email: "anna.nowak@example.com",
            },
            {
              id: 3,
              firstName: "Piotr",
              lastName: "Wiśniewski",
              email: "piotr.wisniewski@example.com",
            },
          ]);
        }, 300);
      });
    },

    addCustomer: async (customerData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding customer:", customerData);
          resolve({ success: true, id: Math.floor(Math.random() * 1000) + 10 });
        }, 500);
      });
    },

    // Products
    getProducts: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "Laptop Dell XPS 13",
              price: 5999.99,
              category: "Elektronika",
            },
            {
              id: 2,
              name: "iPhone 14 Pro",
              price: 4999.99,
              category: "Elektronika",
            },
            {
              id: 3,
              name: "Słuchawki Sony WH-1000XM5",
              price: 1499.99,
              category: "Elektronika",
            },
          ]);
        }, 300);
      });
    },

    addProduct: async (productData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding product:", productData);
          resolve({ success: true, id: Math.floor(Math.random() * 1000) + 10 });
        }, 500);
      });
    },

    // Bank accounts
    getBankAccounts: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              accountNumber: "12 3456 7890 1234",
              bankName: "Bank Polski",
              currency: "PLN",
            },
            {
              id: 2,
              accountNumber: "98 7654 3210 9876",
              bankName: "Bank Niemiecki",
              currency: "EUR",
            },
          ]);
        }, 300);
      });
    },

    addBankAccount: async (accountData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding bank account:", accountData);
          resolve({ success: true, id: Math.floor(Math.random() * 1000) + 10 });
        }, 500);
      });
    },
  },

  /**
   * MongoDB Operations
   */
  mongodb: {
    // Purchase histories
    addPurchaseHistory: async (historyData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding purchase history:", historyData);
          resolve({
            success: true,
            id: `ph_${Math.random().toString(36).substr(2, 9)}`,
          });
        }, 500);
      });
    },

    // Transaction logs
    addTransactionLog: async (logData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding transaction log:", logData);
          resolve({
            success: true,
            id: `tl_${Math.random().toString(36).substr(2, 9)}`,
          });
        }, 500);
      });
    },

    // Customer behavior
    addCustomerBehavior: async (behaviorData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding customer behavior:", behaviorData);
          resolve({
            success: true,
            id: `cb_${Math.random().toString(36).substr(2, 9)}`,
          });
        }, 500);
      });
    },

    // Seller profiles
    addSellerProfile: async (profileData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Adding seller profile:", profileData);
          resolve({
            success: true,
            id: `sp_${Math.random().toString(36).substr(2, 9)}`,
          });
        }, 500);
      });
    },
  },

  /**
   * Azure Operations
   */
  azure: {
    // Blob storage
    uploadBlob: async (containerName, blobName, data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Uploading to ${containerName}/${blobName}:`, data);
          resolve({
            success: true,
            url: `https://globalvistastorage.blob.core.windows.net/${containerName}/${blobName}`,
          });
        }, 800);
      });
    },

    // Cosmos DB
    saveToCosmosDB: async (database, collection, document) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Saving to ${database}.${collection}:`, document);
          resolve({
            success: true,
            id: document.id || `doc_${Math.random().toString(36).substr(2, 9)}`,
          });
        }, 600);
      });
    },

    // Data Factory
    runPipeline: async (pipelineName, parameters) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Running pipeline ${pipelineName}:`, parameters);
          const runId = `run_${Math.random().toString(36).substr(2, 9)}`;
          resolve({
            success: true,
            runId: runId,
            status: "InProgress",
            message: `Pipeline run ${runId} started successfully`,
          });
        }, 1000);
      });
    },
  },
};

// Make the API available globally
window.GlobalVistaAPI = GlobalVistaAPI;

console.log("GlobalVista API Mock initialized");
