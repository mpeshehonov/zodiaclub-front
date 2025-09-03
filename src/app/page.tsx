import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star, ShieldCheck, Sparkles, BadgeDollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <div className="glow left-[-10%] top-[-10%] size-80 rounded-full bg-primary/25" />
      <div className="glow right-[-10%] top-[20%] size-80 rounded-full bg-accent/25" />
      <div className="glow left-[40%] bottom-[-10%] size-96 rounded-full bg-primary/20" />
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full">Zodiaclab</Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Откройте тайны с помощью <span className="text-primary">астрологии</span> и <span className="text-accent">нумерологии</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-prose">
              Лучшие эксперты помогут найти ответы на важные вопросы и принять уверенные решения.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="#experts">Найти специалиста</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#cta">Получить бесплатный прогноз</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-transparent ring-1 ring-inset ring-border">
            <div className="absolute inset-0 m-auto size-48 sm:size-64 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </div>
      </section>

      <Separator className="my-4" />

      {/* Почему выбирают нас */}
      <section className="mx-auto max-w-7xl px-6 py-14" id="features">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Проверенные специалисты", icon: ShieldCheck },
            { title: "Индивидуальный подход", icon: Sparkles },
            { title: "Удобные инструменты", icon: Star },
            { title: "Доступные цены", icon: BadgeDollarSign },
          ].map(({ title, icon: Icon }) => (
            <Card key={title} className="bg-card/60 backdrop-blur">
              <CardHeader className="flex-row items-center gap-3">
                <div className="size-10 rounded-full grid place-items-center bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Мы подбираем лучших экспертов и делимся понятными инструментами для анализа.
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Популярные услуги */}
      <section className="mx-auto max-w-7xl px-6 py-14" id="services">
        <h2 className="text-3xl font-semibold mb-8">Популярные услуги</h2>
        <Tabs defaultValue="consult">
          <TabsList className="mb-6">
            <TabsTrigger value="consult">Консультации</TabsTrigger>
            <TabsTrigger value="subs">Подписки</TabsTrigger>
            <TabsTrigger value="shop">Цифровые товары</TabsTrigger>
          </TabsList>
          <TabsContent value="consult" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={`c-${i}`}>
                <CardHeader>
                  <CardTitle>Платные консультации</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Глубокий разбор вашей ситуации и персональные рекомендации.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold">от 1500 ₽</div>
                    <Button>Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="subs" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={`s-${i}`}>
                <CardHeader>
                  <CardTitle>Подписка и регулярные платежи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Доступ к расширенным функциям и прогнозам каждый месяц.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold">от 700 ₽</div>
                    <Button variant="secondary">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="shop" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={`p-${i}`}>
                <CardHeader>
                  <CardTitle>Цифровые и физические товары</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Курсы, шаблоны, книги и аксессуары для развития.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold">от 990 ₽</div>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-3xl px-6 py-16">
        <Card>
          <CardHeader>
            <CardTitle>Получите персональный мини‑прогноз бесплатно</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Email" type="email" />
            <Textarea className="sm:col-span-2" placeholder="Ваш вопрос" rows={3} />
            <Button className="sm:col-span-2">Отправить</Button>
          </CardContent>
        </Card>
      </section>

      {/* Эксперты */}
      <section id="experts" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-3xl font-semibold mb-8">Лучшие астрологи и нумерологи</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Наталья Курдюмова", desc: "Астролог", rate: 4.9 },
            { name: "Григорий Вылегжанин", desc: "Нумеролог", rate: 4.8 },
            { name: "Евгений Симонов", desc: "Астролог", rate: 4.7 },
            { name: "Алиса Кудряшова", desc: "Психолог, астролог", rate: 4.9 },
            { name: "Алиса Ли", desc: "Астролог", rate: 4.8 },
            { name: "Юлия Панфилова", desc: "Нумеролог", rate: 4.8 },
          ].map((e, idx) => (
            <Card key={e.name}>
              <CardContent className="flex items-start gap-4 p-6">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/96?img=${idx + 1}`} />
                  <AvatarFallback>{e.name.split(" ")[0][0]}{e.name.split(" ")[1]?.[0] ?? ""}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="font-medium leading-none">{e.name}</div>
                  <div className="text-xs text-muted-foreground">{e.desc}</div>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, iStar) => (
                      <Star key={iStar} className={`size-4 ${e.rate >= iStar + 1 ? "fill-current" : "opacity-40"}`} />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">{e.rate.toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button variant="outline">Показать еще</Button>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold mb-8">Отзывы наших клиентов</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/96?u=review-${i}`} />
                        <AvatarFallback>R{i + 1}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Евгения</div>
                        <div className="text-xs text-muted-foreground">★ 4.8</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Разобралась в себе и смогла принять важные решения. Спасибо за поддержку!
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Футер */}
      <footer className="border-t border-border/60 py-10 text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2025 Zodiaclab. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <Link href="#features" className="hover:text-foreground">О нас</Link>
            <Link href="#services" className="hover:text-foreground">Услуги</Link>
            <Link href="#cta" className="hover:text-foreground">Контакты</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
