import React from 'react';  //importing React keyword from react package at location node_modules
import ReactDOM from 'react-dom/client';


/*
-Header
 -Logo
 -Nav-Items
-Body
 -Search
 -RestaurantContainer
  -RestaurantCard
-Footer
 -Copyright
 -Links
 -Address
 -Contact
*/


const resList=[
  {
    "info": {
      "id": "66108",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Whitefield",
      "areaName": "Whitefield",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.9,
      "parentId": "721",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-whitefield-bangalore-66108",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "271483",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "VR Mall",
      "areaName": "Krishnarajapura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 04:00:00",
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
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-vr-mall-krishnarajapura-bangalore-271483",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23688",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/921bd67f-292d-4f14-bc1b-731632d111ec_23688.jpg",
      "locality": "Marathahalli",
      "areaName": "Brookefield",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:45:00",
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
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-marathahalli-brookefield-bangalore-23688",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23823",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Garudachar Palya",
      "areaName": "Mahadevpura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 02:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-garudachar-palya-mahadevpura-bangalore-23823",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "21668",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "locality": "ITPL Main Road",
      "areaName": "NS Complex",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹60"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-itpl-main-road-ns-complex-bangalore-21668",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "665",
      "name": "Chai Point",
      "cloudinaryImageId": "cb3x7bny11ycw32forbq",
      "locality": "AECS Layout",
      "areaName": "Marathahalli",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food",
        "North Indian"
      ],
      "avgRating": 4.3,
      "parentId": "1607",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "25% OFF",
        "subHeader": "UPTO ₹150",
        "discountTag": "SAVE BIG"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chai-point-aecs-layout-marathahalli-bangalore-665",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "289262",
      "name": "BOX8 - Desi Meals",
      "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
      "locality": "Santosh Tower",
      "areaName": "Whitefield",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Thalis",
        "Home Food"
      ],
      "avgRating": 4.4,
      "parentId": "10655",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "13-23 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/box8-desi-meals-santosh-tower-whitefield-bangalore-289262",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "235721",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
      "locality": "Kundalahalli",
      "areaName": "Marathahalli",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets"
      ],
      "avgRating": 4.5,
      "parentId": "281782",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-kundalahalli-marathahalli-bangalore-235721",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "210039",
      "name": "Polar Bear",
      "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
      "locality": "AECS Layout",
      "areaName": "Marathahalli",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "726",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/polar-bear-aecs-layout-marathahalli-bangalore-210039",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "70773",
      "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      "cloudinaryImageId": "a5b1713e5dbcac2d67a5bcb41e457ae3",
      "locality": "Brookefields",
      "areaName": "Brookefields",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "5655",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹899",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-brookefields-bangalore-70773",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "39119",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "AECS Layout",
      "areaName": "Marathahalli",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "21809",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Rolls.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-aecs-layout-marathahalli-bangalore-39119",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "285116",
      "name": "Dindigul Thalappakatti",
      "cloudinaryImageId": "qcoeeteu67eei7wlomdp",
      "locality": "Garudacharpalya",
      "areaName": "Whitefield",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian"
      ],
      "avgRating": 4.1,
      "parentId": "332",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-garudacharpalya-whitefield-bangalore-285116",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "360",
      "name": "Beijing Bites",
      "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
      "locality": "Whitefield",
      "areaName": "Whitefield",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Chinese",
        "Thai"
      ],
      "avgRating": 4.1,
      "parentId": "103",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/beijing-bites-whitefield-bangalore-360",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "214427",
      "name": "CakeZone Patisserie",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/4f681176-0fe5-465a-8848-c0adf17ba9c4_214427.jpg",
      "locality": "SRI VINAYAKA TECH PARK",
      "areaName": "Mahadevapura",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "parentId": "7003",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cakezone-patisserie-sri-vinayaka-tech-park-mahadevapura-bangalore-214427",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "272242",
      "name": "EatFit",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/bf5211ad-bf62-43ed-a3f2-02985ca38b25_272242.JPG",
      "locality": "Hoodi",
      "areaName": "Whitefield",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "76139",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatfit-hoodi-whitefield-bangalore-272242",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "100190",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "Ascendas Park Square",
      "areaName": "Whitefield",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "5588",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-ascendas-park-square-whitefield-bangalore-100190",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "457828",
      "name": "Istah - The Mediterranean Way",
      "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
      "locality": "1st Phase",
      "areaName": "Whitefield",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish"
      ],
      "avgRating": 4.3,
      "parentId": "3518",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Rolls.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                }
              },
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-1st-phase-whitefield-bangalore-457828",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "156073",
      "name": "The Good Bowl",
      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
      "locality": "AECS Layout",
      "areaName": "Marathahalli",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "7918",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-good-bowl-aecs-layout-marathahalli-bangalore-156073",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "39123",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
      "locality": "AECS Layout",
      "areaName": "Marathahalli",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Ice Cream",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "4444",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
            "shortDescription": "Perfect Cake Delivery",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                  "shortDescription": "Perfect Cake Delivery"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-aecs-layout-marathahalli-bangalore-39123",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "424981",
      "name": "Biryani Blues",
      "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
      "locality": "Nallurahalli",
      "areaName": "Whitefield",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Hyderabadi",
        "Lucknowi",
        "Kebabs"
      ],
      "avgRating": 4,
      "parentId": "13813",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-09 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/biryani-blues-nallurahalli-whitefield-bangalore-424981",
      "type": "WEBLINK"
    }
  }
];


const Header = ()=>{
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='data:image/png;base64,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'/>
      </div>

      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = (props)=>{
  const {resData}=props;
  console.log(props);
  return (
    <div className='res-card'>
      <img className='res-logo' alt='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/'+resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4>{`Rating: ${resData.info.avgRating} star`}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{`Delivery Time: ${resData.info.sla.slaString}`}</h4>
    </div>
  );
}

const Body =()=>{
  return (
    <div className='body'>
      <div className='search'>Search</div>

      <div className='res-container'>
        {/* passing props to component */}
        {/* <RestaurantCard 
          resData={resList[0]}
        /> */}

        {
          resList.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>

    
  );
}

const AppLayout = ()=>{
  return (
    <div className='app'>
      
      <Header/>
      <Body/>
    </div>
  );
}



const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<AppLayout/>)


