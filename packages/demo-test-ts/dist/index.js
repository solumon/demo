var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const name = 'index';
function request(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            resolve('请求成功！');
        }
        else {
            reject('请求失败');
        }
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const data = yield request('ccc');
    console.log('data:', data);
}));
