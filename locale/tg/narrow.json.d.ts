import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tg';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;