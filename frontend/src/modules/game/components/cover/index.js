import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import "./styles.css";

const Cover = ({ imageId, slug, className }) => {
  const cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;
  return (
    <div className={className}>
      <Link to={`/games/${slug}`}>
        <Image src={cover} rounded fluid className="cover" />
      </Link>
    </div>
  );
};

Cover.propTypes = {
  imageId: PropTypes.string.isRequired
};

export default Cover;