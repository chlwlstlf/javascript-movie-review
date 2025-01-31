const Skeleton = () => {
  const skeleton = render();
  return skeleton;
};

const render = () => {
  const skeletonHTML = `            
  <li class='skeleton-list none'>
    <div class="item-card">
      <div class="item-thumbnail skeleton"></div>
      <div class="item-title skeleton"></div>
      <div class="item-score skeleton"></div>
    </div>
  </li>
  `.repeat(20);

  return skeletonHTML;
};

export default Skeleton;
