import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;