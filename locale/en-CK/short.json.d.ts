import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CK';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;