export default function handleShare() {
    const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Clicking Game',
        text: `I scored ${count} clicks in ${timer / 1000} seconds! Can you beat me?`,
        url: window.location.href, 
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };
}