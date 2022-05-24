import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ta';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;