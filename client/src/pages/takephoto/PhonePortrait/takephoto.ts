import { Component } from '@angular/core';
import { Screen } from 'app/screen';
declare var window: any;

@Component({
    selector: 'screen-takephoto-phoneportrait',
    templateUrl: 'takephoto.html'
})
export class takephoto_PhonePortrait extends Screen {
    data: any;

    ngOnInit(): void {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
        this.data.fileData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKfGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYzRkNTdhZS1iOWE0LTQxNGQtYTEzMy01NjljNzIxZTY0MzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MjNhNTliMi1mNWM3LWEzNGMtYTg3Yy0zMzZiYTEzNjYxNmYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzIzODYyMTYtMGZiZC00ODNhLTg4OGMtYzY2YmI5OTBkOGNiIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMDhUMDk6MTM6MzktMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTA4VDA5OjE3OjQwLTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTA4VDA5OjE3OjQwLTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTk5ZDBmNzctZmI3MC00ZTQ0LWJjYzAtNTFjY2I1ODg4OTQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNiOTgyNDUyLWRlMTItNDk5Ny1hZTQxLWM3OWY1OGM0MDdlNyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFjNGQ1N2FlLWI5YTQtNDE0ZC1hMTMzLTU2OWM3MjFlNjQzOSIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYTQ4ZDk3MC02YjM3LTQ1MjQtODY3YS1jNjBhNjE5NzhjMDMiIHN0RXZ0OndoZW49IjIwMTktMDQtMDhUMDk6MTU6NTAtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYjk4MjQ1Mi1kZTEyLTQ5OTctYWU0MS1jNzlmNThjNDA3ZTciIHN0RXZ0OndoZW49IjIwMTktMDQtMDhUMDk6MTU6NTAtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTlkMGY3Ny1mYjcwLTRlNDQtYmNjMC01MWNjYjU4ODg5NDkiIHN0RXZ0OndoZW49IjIwMTktMDQtMDhUMDk6MTc6NDAtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMjM4NjIxNi0wZmJkLTQ4M2EtODg4Yy1jNjZiYjk5MGQ4Y2IiIHN0RXZ0OndoZW49IjIwMTktMDQtMDhUMDk6MTc6NDAtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrwNHJgAAAcsSURBVHic7d3fa9V1HMfx9zqbLYahxIJANFJSoquIEPzRVSFdhN7Vjf+aYIhiiFEQuvAif1AXoiAmiq0UBS0TbWN46HhaFzoynOZe7pzj9n08bgY7nO/7e7HD83y+n+/4Ds3OzhYALNRLgz4BAJYmAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACLDvTz4kSNHenl4AJ7Rjh07Fv2YPQ3IQx44AjBYQ704qEtYAEQEBIBIPy5hPaonyygAHtPz7QMrEAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICACR4UGfAPTStndfmz307dlqD2D2+i07q3PtzNAARkNfWIGwrE0MKB5VVZOnvhrQZOgPKxCWtVsPfw6vXFPvbBiv6nZ7O7DVqpkbP9fkzenezoEXgIDQCOu3fVSb14z0ZVb3RrcmvznXl1kwSAJCM3T/qqoHAZm6eq5OnrlUf07fq3plVW38YHu9t27Voo3qdO8v2rHgRWYPhEaZuvx9HTj6Y12/daem2+2avnOzTh89WMcu3x30qcGSIyA0RKuqOnXh9KV5X5384fyzbbZ32tVZzNOCJUxAaIhWVfe3uvakve32VE393/56+2od3rO39uw/WVOLfXqwBAkIDdGtaq2u10ef8PLoWI21nvL29tU6vPfog7u6pi/UAREBAaEpulU1VuvfXj3vqyvferPGnvTWR+MxR0RAQGiWNZt31vaN4//53fjG7bVr67r53zBfPOaICA3nNl4aZqQ2fbirNm3tVLvTrWqN1uiT/j3kafGYM32hDuyv+uzzrfVqD84WXmRWIDRTa6RGRx/EY+b23cfvrHqWeMyxEqGhBIRGu3vxWO07dLC+mPjp34gsJB5zpi/UgS8fRORpe/GwnAgIjXX34rE6eHyyqqruXzlV+ycu1szM9fp6ofGYc+eX+qPjQ0Vz2AOhkR6Nx5z2leO178rzHHWkWlX19/McApYQX5ZonPniASycFQiNcvvisTokHrAorEBoiBVV3as1IR6waAQEgIiAABCxB0KDrKix0dGqkd48mfBeZ6xavpLRIAJCM7SqqvVGfbp7d89HdVs+VjSDv3QaYfLEd/XyhvGq7v899OM5tapmbvza2xnwghAQlrXxqrpVVfenr9e5s9cHfTqwrLhiy7L28Sfv18qBTB6u9Vt2DmQy9IsVCMvaifO/D61eu7bmf4xUb3WunRnAVOgfKxAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIAJHhPs+b7fM8AHrECgSAiIAAEOnHJayhPswAoM+GZmdtSwCwcC5hARAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgMg/xoj2ORj4za0AAAAASUVORK5CYII="
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }

    onDataLoad(data: any): void {
        // Logic to run when the screen's data is updated goes here.
    }

    // Handle displaying file after file is ready.
    onReady() {
        // Read file, and convert to base64 data
        // See: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        let reader = new FileReader();
        reader.readAsDataURL(this.data.file[0]);
        reader.onload = () => {
            // Set fileData, which is used in the image
            this.data.fileData = reader.result;
        }
    }

    onBackButton(): boolean {
        // (Android) returns :
        // true - handle the event in App Hooks
        // false - stop the event propogation
        return true;
    }

}
