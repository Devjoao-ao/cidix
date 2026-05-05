import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Contacto',
      contact_us: 'Fale Connosco'
    },
    hero: {
      badge: 'Tecnologia de confiança para empresas',
      title_1: 'Soluções digitais que',
      title_2: 'impulsionam',
      title_3: 'o seu negócio',
      subtitle: 'A CIDIX oferece serviços tecnológicos completos desde licenciamento de software até infraestrutura cloud para que a sua empresa opere com mais eficiência, segurança e escala.',
      contact_us: 'Fale Connosco',
      view_services: 'Ver Serviços'
    },
    about: {
      label: 'Sobre a CIDIX',
      title_1: 'Tecnologia ao serviço do',
      title_2: 'seu sucesso',
      text_1: 'A CIDIX é uma empresa especializada em soluções digitais e tecnológicas para organizações que pretendem crescer com eficiência e segurança no ambiente digital moderno.',
      text_2: 'Com uma equipa altamente qualificada, oferecemos um portfólio completo de serviços desde infraestrutura cloud e segurança de dados até criação de websites e software de gestão tudo pensado para responder às exigências reais do mercado.',
      pillars: {
        trust_title: 'Confiança',
        trust_desc: 'Parceiro tecnológico comprometido com a integridade e transparência em cada projeto.',
        innovation_title: 'Inovação',
        innovation_desc: 'Utilizamos as mais recentes tecnologias para entregar soluções modernas e eficazes.',
        proximity_title: 'Proximidade',
        proximity_desc: 'Construímos relações duradouras, entendendo as necessidades específicas de cada cliente.'
      }
    },
    services: {
      label: 'O que oferecemos',
      title_1: 'Soluções completas para',
      title_2: 'cada necessidade digital',
      subtitle: 'Do licenciamento de software à infraestrutura cloud, cobrimos todas as vertentes tecnológicas que a sua empresa precisa para operar com segurança e eficiência.',
      list: {
        s1_title: 'Licenças de Software',
        s1_desc: 'Fornecemos licenças originais Microsoft Office, antivírus e demais soluções de software para empresas de qualquer dimensão.',
        s2_title: 'Criação de Websites',
        s2_desc: 'Desenvolvemos websites modernos, responsivos e otimizados para SEO — da landing page ao portal empresarial completo.',
        s3_title: 'Registo de Domínios',
        s3_desc: 'Registe o domínio ideal para a sua marca com suporte técnico dedicado e gestão simplificada do DNS.',
        s4_title: 'Hospedagem de Sites',
        s4_desc: 'Servidores de alto desempenho com disponibilidade garantida, SSL incluído e suporte técnico 24/7.',
        s5_title: 'Servidores Virtuais',
        s5_desc: 'Criação e configuração de VPS e servidores virtuais escaláveis, adaptados às necessidades de processamento da sua empresa.',
        s6_title: 'Backup de Servidores',
        s6_desc: 'Soluções automatizadas de backup com redundância geográfica para garantir a continuidade do seu negócio.',
        s7_title: 'Serviços de Cloud',
        s7_desc: 'Migração, configuração e gestão de ambientes cloud — AWS, Azure ou Google Cloud — com arquitetura otimizada para o seu negócio.',
        s8_title: 'Segurança de Dados',
        s8_desc: 'Implementação de políticas de segurança, encriptação, firewall e monitorização contínua para proteger os seus ativos digitais.',
        s9_title: 'E-mail Corporativo',
        s9_desc: 'E-mail profissional com o domínio da sua empresa, armazenamento generoso, anti-spam avançado e integração com Microsoft 365.',
        s10_title: 'Software de Gestão',
        s10_desc: 'Implementação e personalização de ERP, CRM e ferramentas de gestão para otimizar os processos internos da sua organização.',
        s11_title: 'Geração de Leads',
        s11_desc: 'Estratégias digitais e ferramentas automatizadas para atrair, qualificar e converter potenciais clientes para o seu negócio.',
        s12_title: 'Gestão de VPN',
        s12_desc: 'Configuração e gestão de redes privadas virtuais para garantir comunicações seguras entre as suas equipas e escritórios.',
        s13_title: 'Serviços de VoIP',
        s13_desc: 'Sistemas de comunicação VoIP corporativos com alta qualidade de áudio, redução de custos e integração com CRM.'
      }
    },
    contact: {
      label: 'Contacto',
      title_1: 'Vamos trabalhar',
      title_2: 'juntos',
      subtitle: 'Pronto para transformar a tecnologia da sua empresa? Fale connosco e descubra como a CIDIX pode ajudá-lo.',
      email: 'E-mail',
      angola: 'Angola',
      us: 'Estados Unidos',
      note: 'Respondemos em até 24 horas nos dias úteis.',
      form: {
        name: 'Nome',
        name_ph: 'O seu nome',
        email: 'E-mail',
        email_ph: "o.seu{'@'}email.com",
        message: 'Mensagem',
        message_ph: 'Descreva como podemos ajudar...',
        submit: 'Enviar Mensagem',
        success: 'Mensagem enviada! Entraremos em contacto em breve.'
      }
    },
    footer: {
      brand_text: 'Soluções digitais e tecnológicas para empresas que querem crescer com segurança, eficiência e inovação.',
      nav: 'Navegação',
      services: 'Serviços',
      company: 'Empresa',
      about: 'Sobre',
      about_text: 'A Cidix Solutions é uma empresa internacional focada no crescimento digital de pequenas e médias empresas com o escritório sede em Miami (EUA). Trabalhamos com parceiros estratégicos no mercado tecnológico para entregar inovação e suporte local e internacional.',
      support: 'Suporte',
      rights: 'CIDIX. Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      contact_us: 'Contact Us'
    },
    hero: {
      badge: 'Trusted technology for businesses',
      title_1: 'Digital solutions that',
      title_2: 'drive',
      title_3: 'your business',
      subtitle: 'CIDIX offers complete technological services from software licensing to cloud infrastructure so your company can operate with greater efficiency, security, and scale.',
      contact_us: 'Contact Us',
      view_services: 'View Services'
    },
    about: {
      label: 'About CIDIX',
      title_1: 'Technology at the service of',
      title_2: 'your success',
      text_1: 'CIDIX is a company specialized in digital and technological solutions for organizations that want to grow with efficiency and security in the modern digital environment.',
      text_2: 'With a highly qualified team, we offer a complete portfolio of services from cloud infrastructure and data security to website creation and management software, all designed to respond to real market demands.',
      pillars: {
        trust_title: 'Trust',
        trust_desc: 'Technological partner committed to integrity and transparency in every project.',
        innovation_title: 'Innovation',
        innovation_desc: 'We use the latest technologies to deliver modern and effective solutions.',
        proximity_title: 'Proximity',
        proximity_desc: 'We build lasting relationships, understanding the specific needs of each client.'
      }
    },
    services: {
      label: 'What we offer',
      title_1: 'Complete solutions for',
      title_2: 'every digital need',
      subtitle: 'From software licensing to cloud infrastructure, we cover all technological aspects your company needs to operate securely and efficiently.',
      list: {
        s1_title: 'Software Licenses',
        s1_desc: 'We provide original Microsoft Office, antivirus, and other software solutions for companies of any size.',
        s2_title: 'Website Creation',
        s2_desc: 'We develop modern, responsive, and SEO-optimized websites — from landing pages to full enterprise portals.',
        s3_title: 'Domain Registration',
        s3_desc: 'Register the ideal domain for your brand with dedicated technical support and simplified DNS management.',
        s4_title: 'Web Hosting',
        s4_desc: 'High-performance servers with guaranteed uptime, included SSL, and 24/7 technical support.',
        s5_title: 'Virtual Servers',
        s5_desc: 'Creation and configuration of VPS and scalable virtual servers, tailored to your company\'s processing needs.',
        s6_title: 'Server Backup',
        s6_desc: 'Automated backup solutions with geographic redundancy to ensure business continuity.',
        s7_title: 'Cloud Services',
        s7_desc: 'Migration, configuration, and management of cloud environments — AWS, Azure, or Google Cloud — optimized for your business.',
        s8_title: 'Data Security',
        s8_desc: 'Implementation of security policies, encryption, firewalls, and continuous monitoring to protect your digital assets.',
        s9_title: 'Corporate Email',
        s9_desc: 'Professional email with your company\'s domain, generous storage, advanced anti-spam, and Microsoft 365 integration.',
        s10_title: 'Management Software',
        s10_desc: 'Implementation and customization of ERP, CRM, and management tools to optimize your organization\'s internal processes.',
        s11_title: 'Lead Generation',
        s11_desc: 'Digital strategies and automated tools to attract, qualify, and convert potential clients for your business.',
        s12_title: 'VPN Management',
        s12_desc: 'Configuration and management of virtual private networks to ensure secure communications between your teams and offices.',
        s13_title: 'VoIP Services',
        s13_desc: 'Corporate VoIP communication systems with high audio quality, cost reduction, and CRM integration.'
      }
    },
    contact: {
      label: 'Contact',
      title_1: 'Let\'s work',
      title_2: 'together',
      subtitle: 'Ready to transform your company\'s technology? Talk to us and discover how CIDIX can help.',
      email: 'E-mail',
      angola: 'Angola',
      us: 'United States',
      note: 'We respond within 24 hours on business days.',
      form: {
        name: 'Name',
        name_ph: 'Your name',
        email: 'E-mail',
        email_ph: "your{'@'}email.com",
        message: 'Message',
        message_ph: 'Describe how we can help...',
        submit: 'Send Message',
        success: 'Message sent! We will contact you shortly.'
      }
    },
    footer: {
      brand_text: 'Digital and technological solutions for companies that want to grow with security, efficiency, and innovation.',
      nav: 'Navigation',
      services: 'Services',
      company: 'Company',
      about: 'About',
      about_text: 'Cidix Solutions is an international company focused on the digital growth of small and medium-sized companies with its headquarters in Miami (USA). We work with strategic partners in the technological market to deliver innovation and local and international support.',
      support: 'Support',
      rights: 'CIDIX. All rights reserved.'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
})

export default i18n
