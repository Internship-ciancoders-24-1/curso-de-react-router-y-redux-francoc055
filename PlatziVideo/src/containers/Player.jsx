import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';
import { Link, Navigate, useParams, useNavigate} from "react-router-dom";


const Player = props => {
  const { id } = useParams()
  const navigate = useNavigate();
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  const handleNavigate = () => {
    navigate('/');
  };

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleNavigate}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

