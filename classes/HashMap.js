export default class HashMap {
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
					this.set(item.key, item.value);
				}
			}
		}
	}

	set(key, value) {
		if (!key) return false;

		if (this.size / this.capacity >= this.loadFactor) {
			this.resize();
		}

		const index = this.hash(key);

		if (!this.data[index]) {
			this.data[index] = [];
		}

		// Update existing key
		for (let i = 0; i < this.data[index].length; i++) {
			if (this.data[index][i].key === key) {
				this.data[index][i].value = value;

				return true;
			}
		}

		// Add new key-value pair
		this.data[index].push({ key, value });
		this.size++;

		return true;
	}

	get(key) {
		if (!key) {
			return null;
		}

		const index = this.hash(key);
		const bucket = this.data[index];

		if (!bucket) {
			return null;
		}

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				return bucket[i].value;
			}
		}
	}

	has(key) {
		if (!key) {
			return false;
		}

		const index = this.hash(key);
		const bucket = this.data[index];

		if (!bucket) {
			return false;
		}

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				return true;
			}
		}

		return false;
	}

	remove(key) {
		if (!key) {
			return false;
		}

		const index = this.hash(key);
		const bucket = this.data[index];

		if (!bucket) {
			return false;
		}

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				bucket.splice(i, 1);
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
	}

	keys() {
		const keys = [];

		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				for (let j = 0; j < this.data[i].length; j++) {
					keys.push(this.data[i][j].key);
				}
			}
		}

		return keys;
	}

	values() {
		const values = [];

		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				for (let j = 0; j < this.data[i].length; j++) {
					values.push(this.data[i][j].value);
				}
			}
		}

		return values;
	}

	entries() {
		const entries = [];

		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				for (let j = 0; j < this.data[i].length; j++) {
					entries.push([this.data[i][j].key, this.data[i][j].value]);
				}
			}
		}

		return entries;
	}
}
