
import React from "react" ;
import ReactDOM, {createRoot} from "react-dom/client";
import "./index.css"
import logo from "./public/logo.png"; // Import the image

const Title = () => {
    return(
    <div>
    <a href='/'>
    <img className="logo" src={logo} alt="Logo" />;
    </a>
    </div>
    )
};

//composing component
const Header=()=>{
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}
const RestrauntList=[
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "78036",
              "name": "Burger King",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/a3485033-fb70-41b1-aeb9-1caf3064acf4_78036.jpg",
              "locality": "Central Plaza, Kalina",
              "areaName": "Santacruz East",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "166",
              "avgRatingString": "4.3",
              "totalRatingsString": "37K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-15 05:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹39",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "requestContexts": [
                "no_rush_dynamic_delfee"
              ]
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=78036&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },

 
]
const RestrauntCard=()=>{
    return(
        <div className="card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/a3485033-fb70-41b1-aeb9-1caf3064acf4_78036.jpg"></img>
            <h2>Burger King</h2>
            <h3>Burgers, Americans</h3>
            <h4>4.2 stars</h4>

        </div>
    )
}
const Body=()=>{
    return(
        <>
        <div className="restraunt-list">
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
          
        </div>
        </>
    )
}

const Footer=()=>{
    return(
        <h4>footer</h4>
    )
}

const AppLayout=()=>{
    return(
    <>
    <Header />
    <Body />
    <Footer />
    
    </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)