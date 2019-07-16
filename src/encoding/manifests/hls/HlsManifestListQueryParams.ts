
export interface HlsManifestListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof HlsManifestListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof HlsManifestListQueryParams
     */
    limit?: number | undefined;

    /**
     * Get the manifests that belong to that encoding id
     * @type {string}
     * @memberof HlsManifestListQueryParams
     */
    encodingId?: string | undefined;
}

export class HlsManifestListQueryParamsBuilder {
    private internalParams: HlsManifestListQueryParams = {};

    /**
     *
     * @param offset Index of the first item to return, starting at 0. Default is 0
     */
    public offset(offset: number) {
        this.internalParams.offset = offset;
        return this;
    }

    /**
     *
     * @param limit Maximum number of items to return. Default is 25, maximum is 100
     */
    public limit(limit: number) {
        this.internalParams.limit = limit;
        return this;
    }

    /**
     *
     * @param encodingId Get the manifests that belong to that encoding id
     */
    public encodingId(encodingId: string) {
        this.internalParams.encodingId = encodingId;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
