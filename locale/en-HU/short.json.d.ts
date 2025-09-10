import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-HU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;