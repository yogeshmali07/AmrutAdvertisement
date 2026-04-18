import { motion } from 'framer-motion';
import { siteConfig } from '../config';

const sections = [
  {
    title: '1. Introduction',
    content: `Welcome to ${siteConfig.name}. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before engaging with our services. If you do not agree with any part of these terms, you must not use our services.`,
  },
  {
    title: '2. Services Offered',
    content: `${siteConfig.name} provides advertising and marketing services including but not limited to: Flex Printing, Hoardings & Billboard Advertising, Banner Advertising, Digital Marketing, Branding & Promotion, Outdoor Advertising, and Signage & Shop Boards. The scope of each service will be defined in individual project agreements.`,
  },
  {
    title: '3. Client Responsibilities',
    content:
      'Clients must provide accurate information, content, and materials required for the execution of advertising projects. Delays caused by incomplete or inaccurate client-provided content may affect delivery timelines. Clients are responsible for ensuring they have the rights to all content provided to us for use in advertising materials.',
  },
  {
    title: '4. Pricing & Payment',
    content:
      'All pricing is project-based and will be communicated upfront before work begins. A quotation or estimate will be provided for each project. Payment terms will be agreed upon before commencement of work. Late payments may result in project delays or additional charges as applicable.',
  },
  {
    title: '5. Intellectual Property',
    content: `All creative work, designs, and materials produced by ${siteConfig.name} remain our intellectual property until full payment is received. Upon complete payment, the client receives a license to use the created materials for the agreed-upon purpose. Our company retains the right to showcase completed work in our portfolio unless explicitly agreed otherwise.`,
  },
  {
    title: '6. Project Timelines',
    content:
      'Estimated timelines for project completion will be communicated at the beginning of each engagement. While we strive to meet all deadlines, timelines may be affected by factors beyond our control including weather conditions (for outdoor installations), permit delays, or client-side delays in approvals and content delivery.',
  },
  {
    title: '7. Cancellation & Refund Policy',
    content:
      'Cancellation requests must be submitted in writing. Refunds will be assessed based on work already completed at the time of cancellation. Materials already procured or printed for the project are non-refundable. Custom design work that has been approved by the client is non-refundable.',
  },
  {
    title: '8. Warranty & Liability',
    content: `${siteConfig.name} guarantees the quality of materials and workmanship for outdoor installations for a reasonable period as communicated at the time of installation. We are not liable for damage caused by natural disasters, vandalism, or unauthorized modifications. Our total liability shall not exceed the amount paid by the client for the specific project in question.`,
  },
  {
    title: '9. Privacy & Data Protection',
    content:
      'We respect your privacy and handle all client information with confidentiality. Personal information collected through our website or during project engagements will not be shared with third parties without consent. We use standard security measures to protect client data.',
  },
  {
    title: '10. Modifications to Terms',
    content: `${siteConfig.name} reserves the right to update these Terms and Conditions at any time. Changes will be posted on our website and take effect immediately upon posting. Continued use of our services after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms and Conditions are governed by the laws of the State of Maharashtra, India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in ${siteConfig.address.city}, Maharashtra.`,
  },
  {
    title: '12. Contact Information',
    content: `For questions regarding these Terms and Conditions, please contact us at:\n\n${siteConfig.name}\n${siteConfig.address.line1}, ${siteConfig.address.line2}\n${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.pin}\nEmail: ${siteConfig.email}\nPhone: ${siteConfig.phone}`,
  },
];

export default function Terms() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Terms &{' '}
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-charcoal-500 text-lg leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-charcoal-400 text-sm mt-3">
              Last updated: April 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="mb-10"
              >
                <h2 className="text-xl font-display font-bold text-charcoal-800 mb-3">
                  {section.title}
                </h2>
                <p className="text-charcoal-500 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
