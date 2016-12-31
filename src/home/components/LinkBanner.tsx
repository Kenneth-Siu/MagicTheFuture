import * as React from "react";

export interface LinkBannerProps {
    imageUrl: string;
    linkText: string;
    linkUrl: string;
}

export default class LinkBanner extends React.Component<LinkBannerProps, {}> {

    render() {
        return (
            <div className="link-banner">
                <img src={this.props.imageUrl} />
                <div>
                    <div><a className="text-uppercase" href={this.props.linkUrl}>{this.props.linkText}</a> <span className="glyphicon glyphicon-chevron-right" /></div>
                </div>
            </div>
        );
    }
}
