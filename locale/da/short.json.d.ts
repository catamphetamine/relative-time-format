import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'da';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;