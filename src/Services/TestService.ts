namespace TemplateApp {
    "use strict";

    export class TestService {

        myLists: Array<string>;


        constructor() {

            console.log("ListService.constructor()");

            this.myLists = new Array<string>();

            this.myLists.push("First List");
            this.myLists.push("Second List");
        }
    }
}