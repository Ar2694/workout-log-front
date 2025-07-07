import AxiosClient from "api/utils/axios-client";

export enum HttpMethod {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}

export default class APIClient {
    _data:any;
    _isOk:any;

    // GET request
    static async get(url: string): Promise<any> {
        try {
            const config = {
                url: url,
                method: HttpMethod.GET,
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }

            const request = await AxiosClient.createRequest(config);
            
            return {
                data: request.responseData(),
                isOk: request.isOk()
            };
        } catch (error) {
            console.log(error)
        }

    }

    // POST request
    static async post(url: string, data?: any): Promise<any> {
        try {
            const config = {
                url: url,
                method: HttpMethod.POST,
                httpHeader: {
                    "Content-Type": "application/json"
                },
                data: data
            }

            const request = await AxiosClient.createRequest(config);

            return {
                data: request.responseData(),
                isOk: request.isOk(),
                token: request.getToken()
            };
        } catch (error) {
            console.log(error)
        }

    }

    //PUT request
    static async put(url: string, body: any): Promise<any> {
        try {
            const config = {
                url: url,
                method: HttpMethod.PUT,
                httpHeader: {
                    "Content-Type": "application/json"
                },
                body: body
            }

            const request = await AxiosClient.createRequest(config);

            return {
                data: request.responseData(),
                isOk: request.isOk()
            };
        } catch (error) {
            console.log(error)
        }

    }

    //DELETE request
    static async delete(url: string): Promise<any> {
        try {
            const config = {
                url: url,
                method: HttpMethod.DELETE
            }

            const request = await AxiosClient.createRequest(config);

            return {
                data: request.responseData(),
                isOk: request.isOk()
            };
        } catch (error) {
            console.log(error)
        }
    }
}
