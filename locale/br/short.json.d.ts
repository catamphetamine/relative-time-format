import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'br';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;