
export interface StatisticsPerLabelListByDateRangeQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof StatisticsPerLabelListByDateRangeQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof StatisticsPerLabelListByDateRangeQueryParams
     */
    limit?: number | undefined;

    /**
     * Comma separated list of labels. Filter results to only show the ones specified
     * @type {string}
     * @memberof StatisticsPerLabelListByDateRangeQueryParams
     */
    labels?: string | undefined;
}

export class StatisticsPerLabelListByDateRangeQueryParamsBuilder {
    private internalParams: StatisticsPerLabelListByDateRangeQueryParams = {};

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
     * @param labels Comma separated list of labels. Filter results to only show the ones specified
     */
    public labels(labels: string) {
        this.internalParams.labels = labels;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
