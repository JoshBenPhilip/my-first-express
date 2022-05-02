import res from "express/lib/response";

export function hello(request,response) {
    response.send('Hello. Is it me you\'re looking for?');
}