import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import CardImage from "../../common/components/CardImage";
import cardList from "../../common/cardList";

export interface HomeProps { }

export default class Home extends React.Component<HomeProps, {}> {

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.home.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Magic: the Convergence</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p><i>Humanity's back at it again. You'd think it would have grown out of it by now, but no, it's gone ahead and started another world war, and it's not as if it didn't already have enough problems to deal with. Well, more work for you, then. Right, commander?</i></p>
                        </div>
                        <div className="col-md-4 text-center">
                            <CardImage url={cardList[0].imageUrl} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
