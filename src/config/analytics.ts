/**
 * Analytics configuration for this site — the ONE place the GA4 ID lives.
 *
 * GA_MEASUREMENT_ID is this site's Google Analytics 4 Measurement ID (G-...)
 * for its property in Andrew's Google Analytics account.
 *
 * The ID is committed here on purpose — NOT read from an environment
 * variable. (Lesson from Embroidery Connection's launch: a value that lives
 * only in a hosting dashboard's env vars can silently go missing in the
 * production build. A committed constant can't.)
 *
 * While the ID is the placeholder 'G-XXXXXXXXXX', the Analytics component
 * renders NO tag, so a placeholder can never pollute a real property.
 * Paste the minted ID here — one line — and the tag lights up on the
 * next deploy.
 */
export const GA_MEASUREMENT_ID: string = 'G-4VXYL4RGLS';
