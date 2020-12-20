
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
    get getScenarios() {
        return `${this.base}scenario`;
    }
    getComponentByName(compName) {
        return `${this.base}component/${compName}`;
    }
    // createNewProcess(params: any) {
    //     return `${this.base}/users/password/update?${this.getParams(params)}`;
    // }
    createNewProcess() {
        return `${this.base}process/create`;
    }
    updateProcess(processObj) {
        return `${this.base}process/${processObj.id}`;
    }
    createNewComponent() {
        return `${this.base}component/create`;
    }
    updateComponent(compObj) {
        return `${this.base}component`;
    }
}
