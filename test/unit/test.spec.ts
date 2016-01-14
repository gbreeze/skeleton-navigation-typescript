import {Users} from 'src/users';
import {HttpClient} from 'aurelia-fetch-client';

class HttpStub {
    items: any[];

    fetch(url) {
        return new Promise(resolve => {
            resolve({ json: () => this.items });
        });
    }

    configure(func) { }
}

function createHttpStub(): any {
    return new HttpStub();
}

describe('the Users module', () => {

    it('sets fetch response to users', (done) => {
        var http = createHttpStub(),
            sut = new Users(<HttpClient>http),
            itemStubs = [1],
            itemFake = [2];

        http.items = itemStubs;

        sut.activate().then(() => {
            expect(sut.users).toBe(itemStubs);
            expect(sut.users).not.toBe(itemFake);
            done();
        });
    });

    it("test", function() {        
        expect(true).toBe(true);
    });

    it("test 2", function () {
        let d = "Hello";

        expect("Hello").toBe(d);
    });
    
});