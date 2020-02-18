import { useParams, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React, { useEffect } from 'react';
import './RestaurantPage.scss';
import Loader from '../Loader/Loader';
import { IRestaurantPage, MatchParams } from '../../types';

const RestaurantPage = ({
  restaurant,
  isLoading,
  loadRestaurant,
}: IRestaurantPage) => {
  const { uuid } = useParams<MatchParams>();

  useEffect(() => {
    loadRestaurant(uuid);
    window.scrollTo(0, 0);
  }, [loadRestaurant, uuid]);

  if (isLoading) {
    return (<Loader />);
  }

  return (
    <>
      {restaurant && (
        <>
          <div className="top-block">
            <img
              src={restaurant.heroImageUrls[4].url}
              className="top-block__image"
              alt="logo"
            />
            <div className="top-block__info-block">
              <div className="info-block__info">
                <h1 className="top-block__title">{restaurant.title}</h1>
                <div className="top-block__categories">
                  {restaurant.categories.join(' • ')}
                </div>
                <div className="top-block__address">
                  {restaurant.location.address}
                  {restaurant.location.country}
                  {'  •  '}
                  <span
                    className="top-block__address--details"
                  >
                    More info
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sections-navlist">
            {restaurant.sections.map((section) => (
              <HashLink
              key={section}
                to={`#${restaurant.sectionsMap[section].title}`}
                className="sections-navlist__section-nav"
              >
                {restaurant.sectionsMap[section].title}
              </HashLink>
            ))}
          </div>
          <div className="sections">
            <div className="sections__section">
              {restaurant.sections.map((section) => (
                <React.Fragment key={section}>
                  <div id={restaurant.sectionsMap[section].title} className="section__section-title">
                    {restaurant.sectionsMap[section].title}
                  </div>
                  <div className="section__goods">
                    {restaurant.sectionsMap[section].itemUuids.map((itemUuid: any) => (
                     <React.Fragment key={itemUuid}>
                     <NavLink to={`/restaurants/${uuid}/${itemUuid}`}>
                        <div className="goods__good">
                          <div className="goods__good-description">
                            <div className="goods__good-description--info">
                              <p className="goods__good-description--name">{restaurant.entitiesMap[itemUuid].title}</p>
                              <p className="goods__good-description--ingridients">{restaurant.entitiesMap[itemUuid].description}</p>
                            </div>
                            <div className="goods__good-description--price">
                              <span>{restaurant.entitiesMap[itemUuid].price}</span>
                              <span>{restaurant.priceBucket}</span>
                            </div>
                          </div>
                          {restaurant.entitiesMap[itemUuid].imageUrl
                            ? (
                              <img
                                className="goods__good--image"
                                alt={restaurant.entitiesMap[itemUuid].title}
                                src={restaurant.entitiesMap[itemUuid].imageUrl}
                              />
                            ) : (<></>)
                          }
                        </div>
                      </NavLink>
                        </React.Fragment>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )
      }
    </>
  );
};

export default RestaurantPage;
