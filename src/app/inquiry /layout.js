export const metadata = {
  title: 'Product Inquiry - Lin Ximian Biotechnology',
  description: 'Submit your product inquiries and specifications.',
}

export default function InquiryLayout({ children }) {
  return (
    <section style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {children}
    </section>
  )
}
