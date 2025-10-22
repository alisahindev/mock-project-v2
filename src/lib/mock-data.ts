export interface Assignment {
  id: string
  title: string
  learningObjective: string
  category: string
  deadline: string
  backgroundImage: string
  progress?: number
  isOngoing?: boolean
  socialProof?: string
  description: string
  duration: string
  difficulty: 'Kolay' | 'Orta' | 'Zor'
  prerequisites: string[]
  status: 'not_started' | 'in_progress' | 'completed'
  completionPercentage?: number
  timeSpent?: string
  lastAccessed?: string
  content: string
  instructions: string[]
  resources: Array<{
    name: string
    type: 'pdf' | 'video' | 'link' | 'audio'
    url: string
  }>
  dueDate?: string
  creator: string
  tags: string[]
  version: string
  updateDate: string
}

export const assignments: Assignment[] = [
  {
    id: '1',
    title: 'Restoranda Sipariş Verme',
    learningObjective: 'Kibar istekler öğren',
    category: 'Günlük Yaşam',
    deadline: 'Cuma',
    backgroundImage:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    progress: 65,
    isOngoing: true,
    socialProof: 'Çoğu sınıf arkadaşı bitti!',
    description:
      'Bu görevde, restoranda kibarca sipariş vermeyi öğreneceksiniz. Menüyü inceleyip, garsonla iletişim kurarak siparişinizi verebileceksiniz.',
    duration: '15-20 dakika',
    difficulty: 'Kolay',
    prerequisites: ['Temel kelimeler', 'Sayılar'],
    status: 'in_progress',
    completionPercentage: 65,
    timeSpent: '8 dakika',
    lastAccessed: '2 saat önce',
    content:
      'Restoran senaryosu: Bir restoranda oturuyorsunuz ve menüyü inceliyorsunuz. Garson gelip siparişinizi almak istiyor. Bu durumda nasıl davranmalısınız?',
    instructions: [
      'Menüyü inceleyin ve ne yemek istediğinizi belirleyin',
      'Garsonla göz teması kurun ve elinizi kaldırın',
      'Kibarca "Özür dilerim" diyerek dikkatini çekin',
      'Siparişinizi net ve anlaşılır şekilde verin',
      'Teşekkür edin ve bekleyin',
    ],
    resources: [
      {
        name: 'Restoran Kelimeleri Listesi',
        type: 'pdf',
        url: '/resources/restaurant-vocabulary.pdf',
      },
      {
        name: 'Örnek Diyalog Videosu',
        type: 'video',
        url: '/resources/restaurant-dialogue.mp4',
      },
    ],
    dueDate: '2024-01-15',
    creator: 'Öğretmen Ayşe',
    tags: ['restoran', 'günlük yaşam', 'iletişim'],
    version: '1.2',
    updateDate: '2024-01-10',
  },
  {
    id: '2',
    title: 'Seyahat Planlama',
    learningObjective: 'Tercihleri ifade et',
    category: 'Seyahat',
    deadline: 'Pazartesi',
    backgroundImage:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80',
    description:
      'Seyahat planlama konusunda tercihlerinizi ifade etmeyi öğreneceksiniz. Ulaşım, konaklama ve aktivite seçenekleri hakkında konuşabileceksiniz.',
    duration: '20-25 dakika',
    difficulty: 'Orta',
    prerequisites: ['Temel kelimeler', 'Zaman ifadeleri'],
    status: 'not_started',
    content:
      'Seyahat planlama senaryosu: Bir arkadaşınızla birlikte tatil planı yapıyorsunuz. Farklı seçenekler arasından tercihlerinizi belirtmeniz gerekiyor.',
    instructions: [
      'Seyahat tarihlerini belirleyin',
      'Ulaşım seçeneklerini değerlendirin',
      'Konaklama tercihlerinizi ifade edin',
      'Aktivite seçeneklerini tartışın',
      'Son kararı birlikte verin',
    ],
    resources: [
      {
        name: 'Seyahat Kelimeleri',
        type: 'pdf',
        url: '/resources/travel-vocabulary.pdf',
      },
    ],
    dueDate: '2024-01-20',
    creator: 'Öğretmen Mehmet',
    tags: ['seyahat', 'planlama', 'tercih'],
    version: '1.0',
    updateDate: '2024-01-08',
  },
  {
    id: '3',
    title: 'Doktor Randevusu',
    learningObjective: 'Sağlık durumunu açıkla',
    category: 'Sağlık',
    deadline: 'Çarşamba',
    backgroundImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description:
      'Doktor randevusu alırken sağlık durumunuzu açıklamayı öğreneceksiniz. Semptomları tanımlayıp, randevu alabileceksiniz.',
    duration: '18-22 dakika',
    difficulty: 'Orta',
    prerequisites: ['Vücut parçaları', 'Temel kelimeler'],
    status: 'not_started',
    content:
      'Doktor randevusu senaryosu: Hasta hissediyorsunuz ve doktor randevusu almanız gerekiyor. Semptomlarınızı açıklayıp uygun bir randevu saati bulmalısınız.',
    instructions: [
      'Semptomlarınızı listeleyin',
      'Doktor randevusu için arayın',
      'Sağlık durumunuzu açıklayın',
      'Uygun randevu saati bulun',
      'Randevu detaylarını onaylayın',
    ],
    resources: [
      {
        name: 'Sağlık Kelimeleri',
        type: 'pdf',
        url: '/resources/health-vocabulary.pdf',
      },
      {
        name: 'Semptom Açıklama Rehberi',
        type: 'pdf',
        url: '/resources/symptoms-guide.pdf',
      },
    ],
    dueDate: '2024-01-18',
    creator: 'Öğretmen Fatma',
    tags: ['sağlık', 'doktor', 'randevu'],
    version: '1.1',
    updateDate: '2024-01-09',
  },
  {
    id: '4',
    title: 'Alışveriş Yapma',
    learningObjective: 'Fiyat sorma ve pazarlık etme',
    category: 'Günlük Yaşam',
    deadline: 'Perşembe',
    backgroundImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    description:
      'Alışveriş yaparken fiyat sorma ve pazarlık etme becerilerini geliştireceksiniz. Farklı ürünler hakkında bilgi alıp, fiyat konuşabileceksiniz.',
    duration: '12-15 dakika',
    difficulty: 'Kolay',
    prerequisites: ['Sayılar', 'Temel kelimeler'],
    status: 'not_started',
    content:
      'Alışveriş senaryosu: Bir mağazada alışveriş yapıyorsunuz. Ürünlerin fiyatlarını sorup, pazarlık yapabileceksiniz.',
    instructions: [
      'İlgilendiğiniz ürünleri belirleyin',
      'Fiyatları sorun',
      'Pazarlık yapmayı deneyin',
      'Karar verin ve satın alın',
      'Ödeme yapın',
    ],
    resources: [
      {
        name: 'Alışveriş Kelimeleri',
        type: 'pdf',
        url: '/resources/shopping-vocabulary.pdf',
      },
    ],
    dueDate: '2024-01-19',
    creator: 'Öğretmen Ali',
    tags: ['alışveriş', 'fiyat', 'pazarlık'],
    version: '1.0',
    updateDate: '2024-01-07',
  },
  {
    id: '5',
    title: 'İş Görüşmesi',
    learningObjective: 'Kendini tanıtma ve deneyimlerini anlatma',
    category: 'İş',
    deadline: 'Salı',
    backgroundImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description:
      'İş görüşmesinde kendinizi tanıtma ve deneyimlerinizi anlatma becerilerini geliştireceksiniz. Profesyonel bir şekilde kendinizi ifade edebileceksiniz.',
    duration: '25-30 dakika',
    difficulty: 'Zor',
    prerequisites: ['İş kelimeleri', 'Deneyim ifadeleri', 'Geçmiş zaman'],
    status: 'not_started',
    content:
      'İş görüşmesi senaryosu: Bir iş başvurusu yaptınız ve görüşmeye çağrıldınız. Kendinizi tanıtıp, deneyimlerinizi anlatmanız gerekiyor.',
    instructions: [
      'Kendinizi tanıtın',
      'Eğitim geçmişinizi anlatın',
      'İş deneyimlerinizi paylaşın',
      'Güçlü yönlerinizi belirtin',
      'Soruları yanıtlayın',
    ],
    resources: [
      {
        name: 'İş Görüşmesi Rehberi',
        type: 'pdf',
        url: '/resources/job-interview-guide.pdf',
      },
      {
        name: 'Örnek Görüşme Videosu',
        type: 'video',
        url: '/resources/interview-example.mp4',
      },
    ],
    dueDate: '2024-01-16',
    creator: 'Öğretmen Zeynep',
    tags: ['iş', 'görüşme', 'kariyer'],
    version: '1.3',
    updateDate: '2024-01-11',
  },
]

export function getAssignmentById(id: string): Assignment | undefined {
  return assignments.find(assignment => assignment.id === id)
}

export function getAllAssignments(): Assignment[] {
  return assignments
}

export function getAssignmentsByCategory(category: string): Assignment[] {
  return assignments.filter(assignment => assignment.category === category)
}

export function getAssignmentsByStatus(status: Assignment['status']): Assignment[] {
  return assignments.filter(assignment => assignment.status === status)
}
