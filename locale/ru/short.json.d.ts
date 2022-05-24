import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ru';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;