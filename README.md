# GSAP in 12 Minutes

Hello there! Thanks for watching the video; I hope you've found it helpful!

In this repository, you can take a look at each file used and showcased in the video. As mentioned in the video, this is the snippet used to prevent React's double-rendering issues:

```typescript
const didAnimate = useRef(false);
  useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    // Below, you will place your animations function/import.
    animations(); // Like here
  }, []);
```
[Here](https://youtu.be/H_fl-ccB48w) is the link to the video.
