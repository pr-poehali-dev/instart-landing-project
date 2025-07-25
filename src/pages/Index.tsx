import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const courses = [
    {
      title: "SMM Специалист с нуля",
      description: "Изучите продвижение в соцсетях: Instagram, VK, TikTok. Создание контента и настройка рекламы",
      duration: "2 месяца",
      level: "Начинающий",
      price: "Включено в тариф",
      features: ["Stories и Reels", "Работа с блогерами", "Сертификат"]
    },
    {
      title: "Менеджер маркетплейсов",
      description: "Управление товарами на Wildberries и Ozon. Инфографика, аналитика, вывод в топ",
      duration: "1.5 месяца", 
      level: "Начинающий",
      price: "Включено в тариф",
      features: ["WB и Ozon", "Карточки товаров", "Сертификат"]
    },
    {
      title: "Копирайтер-маркетолог",
      description: "Написание продающих текстов для соцсетей, сайтов и рекламных кампаний",
      duration: "1 месяц",
      level: "Начинающий", 
      price: "Включено в тариф",
      features: ["Продающие тексты", "Сценарии прогревов", "Сертификат"]
    },
    {
      title: "Дизайнер соцсетей",
      description: "Создание визуального контента: посты, Stories, обложки. Работа в мобильных приложениях",
      duration: "1.5 месяца",
      level: "Начинающий",
      price: "Включено в тариф",
      features: ["Мобильные макеты", "AR-маски", "Сертификат"]
    },
    {
      title: "Web-дизайнер на Tilda",
      description: "Создание сайтов без программирования. Лендинги, интернет-магазины на конструкторе Tilda",
      duration: "2 месяца",
      level: "Средний",
      price: "Включено в тариф",
      features: ["Figma + Tilda", "Мобильные Taplink", "Сертификат"]
    },
    {
      title: "Эксперт по нейросетям",
      description: "Генерация текстов, изображений и видео через AI. Автоматизация создания контента",
      duration: "1 месяц",
      level: "Средний",
      price: "Включено в тариф",
      features: ["ChatGPT, Midjourney", "AI контент", "Сертификат"]
    }
  ];

  const plans = [
    {
      name: "Базовые курсы",
      price: "1 990 ₽",
      description: "Основа для старта",
      features: [
        "Более 10 курсов для новичков",
        "SMM, копирайтинг, дизайн", 
        "Без ограничений по времени",
        "Сертификаты о прохождении"
      ],
      popular: false
    },
    {
      name: "Новые направления",
      price: "2 990 ₽",
      description: "Топовые профессии",
      features: [
        "SMM-специалист",
        "Мобильные Taplink", 
        "Чат-боты в Telegram",
        "AR Creator - маски Instagram",
        "Нейросети для контента"
      ],
      popular: false
    },
    {
      name: "Маркетплейсы",
      price: "4 990 ₽",
      description: "Работа с Wildberries, Ozon",
      features: [
        "Менеджер Wildberries",
        "Менеджер Ozon",
        "Инфографика для карточек",
        "Путь предпринимателя на WB",
        "Закупки из Китая"
      ],
      popular: true
    },
    {
      name: "Все включено",
      price: "4 990 ₽",
      description: "Курсы из тарифов 1 и 2",
      features: [
        "Все базовые курсы",
        "Все новые направления",
        "Дополнительные бонусы",
        "Приоритетная поддержка"
      ],
      popular: false
    },
    {
      name: "Премиум",
      price: "7 990 ₽",
      description: "Полный доступ ко всем курсам",
      features: [
        "Все 35+ курсов проекта",
        "Новые материалы бесплатно",
        "Персональные консультации",
        "Канал поиска клиентов",
        "VIP поддержка"
      ],
      popular: false
    },
    {
      name: "VIP",
      price: "14 990 ₽",
      description: "Максимальный пакет",
      features: [
        "Все возможности Премиум",
        "Личные консультации с экспертами",
        "Индивидуальный план развития",
        "Приоритет в канале клиентов",
        "Эксклюзивные материалы"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">InSTART</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">Курсы</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Тарифы</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
            </nav>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Начни карьеру
              <span className="text-blue-600"> в IT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Изучай востребованные навыки с экспертами индустрии. 
              Получай сертификаты и строй успешную карьеру в технологиях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Бесплатная консультация
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">300,000+</div>
                <div className="text-gray-600">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Курсов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
                <div className="text-gray-600">Рейтинг платформы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Популярные курсы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выбирайте из более чем 25 программ обучения по современным 
              востребованным профессиям, разработанных экспертами индустрии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-sm hover-scale">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {course.level}
                    </Badge>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name="BookOpen" className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Icon name="Clock" className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {course.price}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф для ваших образовательных целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-transform duration-300 hover-scale ${
                plan.popular 
                  ? 'border-blue-500 border-2 shadow-lg' 
                  : 'border border-gray-200 shadow-sm'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price}
                  </div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Icon name="Check" className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Получите официальный сертификат
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              После успешного завершения курса вы получите цифровой сертификат, 
              который подтверждает ваши навыки и знания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Верифицированные сертификаты</h3>
                  <p className="text-gray-600">
                    Все сертификаты имеют уникальный номер и могут быть проверены работодателями
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Share" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Поделитесь в LinkedIn</h3>
                  <p className="text-gray-600">
                    Легко добавьте сертификат в свой профиль LinkedIn одним кликом
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Download" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Скачать в PDF</h3>
                  <p className="text-gray-600">
                    Получите красиво оформленный сертификат в высоком разрешении
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center border-4 border-blue-600 p-8 rounded-lg">
                  <div className="text-blue-600 mb-4">
                    <Icon name="Award" className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Сертификат о завершении
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Веб-разработка с нуля
                  </p>
                  <div className="text-sm text-gray-500">
                    ID: #INS-2024-WD-001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Готовы изменить свою карьеру?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь 
            благодаря нашим курсам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              <Icon name="Rocket" className="mr-2 h-5 w-5" />
              Начать сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">InSTART</span>
            </div>
            <p className="text-gray-600 mb-6">
              Образовательная платформа нового поколения
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icon name="Mail" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">  
                <Icon name="Phone" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;