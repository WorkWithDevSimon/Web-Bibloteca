# Generated by Django 4.2.7 on 2023-12-11 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='socio',
            name='password',
            field=models.CharField(default='JuanP', max_length=254),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='socio',
            name='username',
            field=models.CharField(default='12345', max_length=50),
            preserve_default=False,
        ),
    ]
