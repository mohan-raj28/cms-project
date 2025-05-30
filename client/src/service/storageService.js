class StorageService {
    constructor(key = "storageDb") {
        this.key = key;
        let data = localStorage.getItem(this.key);
        if (data === null) {
            data = {};
            localStorage.setItem(this.key, JSON.stringify(data));
            this.db = data;
        } else {
            this.db = JSON.parse(data);
        }
    }

    // Get the entire storage object
    getAll() {
        return { ...this.db };
    }

    // Get a value by key (e.g., "expenses") for the current user
    getItem(itemKey) {
        const userId = localStorage.getItem("currentUser");
        if (!userId) return [];
        if (!this.db[userId]) return [];
        return this.db[userId][itemKey] || [];
    }

    // Set a value by key (e.g., "expenses", expensesArray) for the current user
    setItem(itemKey, value) {
        const userId = localStorage.getItem("currentUser");
        if (!userId) return;
        if (!this.db[userId]) this.db[userId] = {};
        this.db[userId][itemKey] = value;
        this._save();
    }

    // Remove a value by key for the current user
    removeItem(itemKey) {
        const userId = localStorage.getItem("currentUser");
        if (!userId || !this.db[userId]) return;
        delete this.db[userId][itemKey];
        this._save();
    }

    // Clear all storage
    clear() {
        this.db = {};
        this._save();
    }

    // Check if a key exists
    hasItem(itemKey) {
        return Object.prototype.hasOwnProperty.call(this.db, itemKey);
    }

    // Internal method to persist to localStorage
    _save() {
        localStorage.setItem(this.key, JSON.stringify(this.db));
    }
}

const storageService = new StorageService();
export default storageService;