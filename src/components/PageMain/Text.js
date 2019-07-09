import React, { Component } from 'react';
import styles from './Text.module.css'

class Text extends Component {
  render() {
    return (
      <div className={styles.text}>
        <p>Men's skate shoes are the foundation of the DC Shoes brand. We continue to pave the way for skate shoes technology so you can perform at your best. We know that you are constantly evolving your skills and testing new limits and we strongly believe that your skate shoes should be just as innovative. Being comfortable in your own stride means being able to focus more on new challenges that lie ahead and we aim to make stepping out of your comfort zone a bit easier with each of our skate shoe designs.</p>
        <p>Discover skate styles inspired by the pros with men’s skate shoes from Nike SB. Check out signature skate styles from Stefan Janoski, Paul Rodriguez and Eric Koston, and find men's skate shoes designed for great boardfeel, superior grip and impact protection. Featuring both classic and updated skate shoe silhouettes, Nike SB men's skate shoes perform just as good as they look. Choose from a wide variety of men’s skate shoe styles and colors and pair with men's Nike SB skate clothing for a complete look. Shop Nike SB shoes for women, girls and boys and be sure to check out the entire Nike SB collection for an even greater selection. Find skate apparel like hoodies, pants and socks to add to your wardrobe.</p>
      </div>
    );
  }
}

export default Text;