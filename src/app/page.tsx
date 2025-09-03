import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
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
          {["Проверенные специалисты", "Индивидуальный подход", "Удобные инструменты", "Доступные цены"].map((title) => (
            <Card key={title} className="bg-card/60 backdrop-blur">
              <CardHeader>
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
                  <Button className="w-full">Подробнее</Button>
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
                  <Button className="w-full" variant="secondary">Подробнее</Button>
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
                  <Button className="w-full" variant="outline">Подробнее</Button>
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
