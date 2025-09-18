// src/components/home/GoogleMap.tsx

const GoogleMap = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-quattrocento">
        Pan Location
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.35664911856!2d0.454105!3d46.043983999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fe6fef01e7aebd%3A0x54f23c6c9cb3978a!2sChateau%20de%20la%20Borderie!5e0!3m2!1sen!2sar!4v1743958834750!5m2!1sen!2sar"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Château Paradis Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
