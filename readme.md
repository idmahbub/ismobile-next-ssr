# ismobile ssr nextjs
This script will detect the device by comparing patterns from User-Agent string, compatible with server component (SSR) server side rendering for nextjs app.

# install
    $npm install ismobile-next-ssr --save

# usage
    ```
    import isMobile from 'ismobile-next-ssr'
    export default function MyApp({ params }) {
        return (
            {isMobile() ? (
                <YourMobileComponent />
            ):(
                <YourDesktopComponent />
            )}
        )
    }
    ```
# TODO
  * add triggered component in custome drirecotry for dynamic component.