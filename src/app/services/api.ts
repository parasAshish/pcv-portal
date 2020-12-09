
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
    getVariationByComponent(component) {
        return `${this.base}variation?${component.name}`;
    }
    // createNewProcess(params: any) {
    //     return `${this.base}/users/password/update?${this.getParams(params)}`;
    // }
    createNewProcess() {
        return `${this.base}process/create`;
    }
    createNewComponent() {
        return `${this.base}process/component`;
    }
    updateProcess(processObj) {
        return `${this.base}process/${processObj.id}`;
    }
    updateComponent(compObj) {
        return `${this.base}process/${compObj.id}`;
    }
}
