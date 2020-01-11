export class GameLogger {
    constructor(history, setHistory) {
        this.history = history;
        this.setHistory = setHistory;
    }
    addMessageToLog = (msg) => {
        let logs = this.history;
        if (logs.length === 20) {
            logs.pop();
        }
        logs.unshift(msg);
        this.setHistory(logs);
    }
}

