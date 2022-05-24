import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;