export default class HashSet {
	constructor() {
		this.loadFactor = 0.75;
		this.capacity = 8;
		this.data = new Array(this.capacity);
		this.size = 0;
	}

	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode =
				(hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
		}

		if (hashCode < 0 || hashCode >= this.capacity) {
			throw new Error("Trying to access index out of bounds");
		}

		return hashCode;
	}

	resize() {
		const oldData = this.data;
		this.capacity *= 2;
		this.data = new Array(this.capacity);
		this.size = 0;

		for (const bucket of oldData) {
			if (bucket) {
				for (const item of bucket) {
					this.set(item.key);
				}
			}
		}
	}

	set(key) {
		if (!key) return false;

		if (this.size / this.capacity >= this.loadFactor) {
			this.resize();
		}

		const index = this.hash(key);
		if (!this.data[index]) {
			this.data[index] = [];
		}

		// Check for duplicates
		for (let i = 0; i < this.data[index].length; i++) {
			if (this.data[index][i].key === key) {
				return false;
			}
		}

		// Add new key
		this.data[index].push({ key });
		this.size++;
		return true;
	}

	get(key) {
		if (!key) return false;

		const index = this.hash(key);

		if (!this.data[index]) {
			return false;
		}

		for (const item of this.data[index]) {
			if (item.key === key) {
				return true;
			}
		}

		return false;
	}

	has(key) {
		return this.get(key);
	}

	remove(key) {
		if (!key) return false;

		const index = this.hash(key);

		if (!this.data[index]) {
			return false;
		}

		for (let i = 0; i < this.data[index].length; i++) {
			if (this.data[index][i].key === key) {
				this.data[index].splice(i, 1);
				this.size--;
				return true;
			}
		}

		return false;
	}

	length() {
		return this.size;
	}

	clear() {
		this.data = new Array(this.capacity);
		this.size = 0;

		return true;
	}

	keys() {
		const keys = [];

		for (const bucket of this.data) {
			if (bucket) {
				for (const item of bucket) {
					keys.push(item.key);
				}
			}
		}

		return keys;
	}

	entries() {
		const entries = [];

		for (const bucket of this.data) {
			if (bucket) {
				for (const item of bucket) {
					entries.push([item.key, item.key]);
				}
			}
		}

		return entries;
	}

	values() {
		return this.keys();
	}
}
