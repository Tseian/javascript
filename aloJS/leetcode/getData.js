class GetData {
    constructor(dbName, JobsObjName) {

        this.dbName = dbName;
        this.JobsObjName = JobsObjName;

        const request = window.indexedDB.open(this.dbName);
        // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
        request.onupgradeneeded = (event) => {
            this.db = request.result;
        };
        // 成功打开数据库
        request.onsuccess = (event) => {
            this.db = request.result;
            this.query()
        };

    }

    query() {
        let objectStore = this.db.transaction([this.JobsObjName]).objectStore(this.JobsObjName);
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                console.log(cursor);
                cursor.continue();
            } else {
                console.log('没有更多数据了！');
            }
        };
    }

    getAll() {
        let transaction = this.db.transaction([this.JobsObjName]);
        let objectStore = transaction.objectStore(this.JobsObjName);

        let req = objectStore.getAllKeys();
        req.onsuccess = (event) => {
            console.log(req.result);
        }
    }

}


