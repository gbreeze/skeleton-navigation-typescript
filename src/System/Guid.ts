namespace System {
    export class Guid {
        constructor(public guid: string) {
            this._guid = guid;
        }

        private _guid: string;

        public ToString(): string {
            return this.guid;
        }

        // Static member
        static MakeNew(): Guid {
            var d = new Date().getTime();
            var result = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });

            return new Guid(result);
        }
    }
}