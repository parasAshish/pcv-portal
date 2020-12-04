
export class API {
    private base: string;
    constructor(base: string) {
        this.base = base;
    }
    private getParams(params: any): string {
        return Object.keys(params).filter(key => !!params[key]).map(key => key + '=' + params[key]).join('&');
    }
    get getProcesses() {
        return `${this.base}process`;
    }
    get getComponents() {
        return `${this.base}component`;
    }
    createNewProcess(params: any) {
        return `${this.base}/users/password/update?${this.getParams(params)}`;
    }
}
